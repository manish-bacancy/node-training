// const { v4: uuidv4 } = require('uuid');
const multipart = require('aws-lambda-multipart-parser');
const { AWS } = require('../../config/aws.local.config');
const { successResponse, errorResponse } = require('../../helper/responses.helper');

const dynamoDbClient = new AWS.DynamoDB.DocumentClient();
const USER = process.env.USERS_TABLE;

const checkIfUserExist = async (userId) => {
  const params = {
    TableName: USER,
    Key: {
      userId,
    },
  };
  try {
    const { Item } = await dynamoDbClient.get(params).promise();
    if (Item) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

exports.getAllUser = async (event) => {
  const lastEvalKey = event.queryStringParameters?.lastEvalKey;
  const params = {
    TableName: USER,
    Limit: 5,
  };
  if (lastEvalKey) {
    params.ExclusiveStartKey = { userId: lastEvalKey };
  }
  const res = await dynamoDbClient.scan(params).promise();
  if (!res) {
    return errorResponse({ message: 'Error while fetching users data!!!' }, 500);
  }
  return successResponse(res, 200);
};

exports.getOneUser = async (event) => {
  const params = {
    TableName: USER,
    Key: {
      userId: event.pathParameters.userId,
    },
  };
  try {
    const { Item } = await dynamoDbClient.get(params).promise();
    if (Item) {
      return successResponse(Item, 200);
    }
    return successResponse({ message: `User does not exist with userId: ${event.pathParameters.userId}` }, 200);
  } catch (error) {
    return errorResponse(error, 500);
  }
};

exports.addUser = async (event, context) => {
  // Parse data from event.body
  const eventBody = multipart.parse(event, true);
  const {
    firstName, lastName, email, password, contactNo, GSTNo, role,
  } = eventBody;

  // Extract data from prev middleware
  const prevData = JSON.parse(context.prev.body).data;

  // Insert dta in to database
  const params = {
    TableName: USER,
    Item: {
      userId: prevData.userId,
      firstName,
      lastName,
      email,
      password,
      contactNo,
      GSTNo,
      role,
      avatar: prevData.objURL,
    },
  };
  const user = await dynamoDbClient.put(params).promise();
  if (!user) {
    return errorResponse({ message: 'Error while adding user data!!!' }, 500);
  }
  // delete params.Item.password;
  return successResponse({ user, message: 'Data added successfully...' }, 200);
};

exports.updateUser = async (event) => {
  const eventBody = multipart.parse(event, true);
  const {
    firstName, lastName, password, contactNo,
  } = eventBody;

  try {
    // Check if user exist or not
    if (!(await checkIfUserExist(event.pathParameters.userId))) {
      return successResponse({ message: `User does not exist with userId: ${event.pathParameters.userId}` }, 200);
    }

    const params = {
      TableName: USER,
      Key: {
        userId: event.pathParameters.userId,
      },
      ExpressionAttributeValues: {
        ':firstName': firstName,
        ':lastName': lastName,
        ':password': password,
        ':contactNo': contactNo,
      },
      UpdateExpression: 'SET firstName = :firstName, lastName = :lastName, password = :password, contactNo = :contactNo',
      ReturnValues: 'ALL_NEW',
    };

    await dynamoDbClient.update(params).promise();
    return successResponse({ message: 'User\'s data updated successfully...' }, 500);
  } catch (error) {
    return errorResponse(error, 500);
  }
};

exports.deleteUser = async (event) => {
  const params = {
    TableName: USER,
    Key: {
      userId: event.pathParameters.userId,
    },
  };

  try {
    // Check if user exist or not
    if (!(await checkIfUserExist(event.pathParameters.userId))) {
      return successResponse({ message: `User does not exist with userId: ${event.pathParameters.userId}` }, 200);
    }

    await dynamoDbClient.delete(params).promise();
    return successResponse({ message: 'User\'s data deleted successfully...' }, 500);
  } catch (error) {
    return errorResponse(error, 500);
  }
};
