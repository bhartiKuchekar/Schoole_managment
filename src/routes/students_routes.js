const express = require("express");
const routes = express.Router();
const stuController = require("../controller/student_controller");

routes.get("/", stuController.studentList);

routes.post("/add_student", stuController.addStudent);

routes.patch("/update_student/:id", stuController.editStudent);

routes.delete("/delete_student/:id", stuController.deletStudent);

module.exports = routes;
