const express=require('express');
const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController"); //database er jonno
const TeacherController = require('../controllers/TeacherController');
const router=  express.Router();


// This is my first get routing
router.get("/hello-get",HelloController.HelloGet)
router.post("/hello-post",HelloController.HelloPost)

//mongoose Schools/students
router.post("/InsertStudent", StudentsController.InsertStudent); //document create
router.get("/ReadStudent", StudentsController.ReadStudent); //document read
router.post("/UpdateStudent/:id", StudentsController.UpdateStudent); //document update
router.post("/DeleteStudent/:id", StudentsController.DeleteStudent); //document delete

//mongoose Schools/teacher
router.post("/CreateTeacher", TeacherController.CreateTeacher);
router.get("/ReadTeacher", TeacherController.ReadTeacher);
router.post("/UpdateTeacher/:id", TeacherController.UpdateTeacher);
router.post("/DeleteTeacher/:id", TeacherController.DeleteTeacher);

module.exports=router;




