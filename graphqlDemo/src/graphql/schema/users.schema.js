// Import stuff from graphql
const { GraphQLObjectType, GraphQLSchema } = require('graphql');

// Import queries
const { getAllUser, getOneUser } = require('../users/queries.user');

// Import mutations
const { addUser, loginUser } = require('../users/mutations.user');

// Define QueryType
const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Queery Type',
  fields: {
    getAllUser, getOneUser,
  },
});

// Define MutationType
const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation Type',
  fields: {
    addUser, loginUser,
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
