const express = require("express");

const routes = express.Router();

const TeacherController = require("../controller/teacher_controller");

routes.get("/", TeacherController.teacherList);

routes.post("/add_teacher/", TeacherController.addTeacher);

routes.patch("/update_teacher/:id", TeacherController.editTeacher);

routes.delete("/delete_teacher/:id", TeacherController.deletTeacher);

module.exports = routes;
