const { studentModel, roomModel, adminModel, rectorModel, floorModel, hostelModel } = require("../model/models");
const loginUtil = require('../util/loginUtil');
const { verify } = require('jsonwebtoken');
const { hash } = require('bcrypt');
const insertDocUtil = require("../util/insertDocUtil");

let adminLoginController = async (req, res) => {
  loginUtil(req, res, adminModel);
}

let rectorLoginController = async (req, res) => {
  loginUtil(req, res, rectorModel);
}

let adminRectorAddStudentController = async (req, res) => {
  try{
    let studentDetails = "";
    await req.on('data', chunk => {
      studentDetails += chunk;
    })
    // const encryptedPassword = await hash(studentDetails.password, 10);
    studentDetails = JSON.parse(studentDetails);
    studentDetails.password = await hash(studentDetails.password, 10);
    studentDetailsToBeAdded = new studentModel(studentDetails);
    const { firstName, lastName, email, password, allocatedRoomCode, courseDetails } = studentDetails;
    const { courseName, courseAdmissionMonth, courseAdmissionYear, coursePassoutMonth, coursePassoutYear } = courseDetails;
  
    if(!firstName || !lastName || !email || !password || !allocatedRoomCode || !courseDetails.courseName || !courseDetails.courseAdmissionMonth || !courseDetails.courseAdmissionYear || !courseDetails.coursePassoutMonth || !courseDetails.coursePassoutYear) throw new Error("All Details of the student must be provide!!!");
    // Check if seat available in specific room or not
    let roomFlag = [];
    await roomModel.find()
    .then( rooms => {
      roomFlag = rooms.filter(room => room.roomCode === (allocatedRoomCode));
    });
    roomFlag = roomFlag[0];
    if(!roomFlag) throw new Error("Room code does not exist in database!!!");

    // Check if room any seat available in room or not
    let allocatedStudentInRoom = await studentModel.aggregate([{$match: {allocatedRoomCode: allocatedRoomCode}}, {$count: "Count"}]);
    if(allocatedStudentInRoom.length == 0){
      insertDocUtil(req, res, studentDetailsToBeAdded, "Student Details Added Successfully...");
    }else{
      if(allocatedStudentInRoom[0].Count >= roomFlag.roomCapacity) throw new Error(`No seats available in roomCode ${allocatedRoomCode}!!!`);
      insertDocUtil(req, res, studentDetailsToBeAdded, "Student Details Added Successfully...");
    }
  }catch(e){
    res.setHeader('Content-Type', 'application/json');
    res.status(404).json({ error: e.message });
    res.end();
  }
}

}

module.exports = {
  adminLoginController,
  rectorLoginController,
  adminRectorAddStudentController,
}