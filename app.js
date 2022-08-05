const express = require("express");
const mongoose = require("mongoose");
const students_routes = require("./src/routes/students_routes");
const teacher_routes = require("./src/routes/teacher_routes");
const login_routes = require("./src/routes/login_routes");
const subject_routes = require("./src/routes/subject_routes");
const cls_routes = require("./src/routes/class_routes");
const app = express();

mongoose.connect("mongodb://localhost/School_managment", () => {
  console.log("Database connected..");
});
app.use(express.json());

app.use("/student", students_routes);
app.use("/teacher", teacher_routes);
app.use("/register", login_routes);
app.use("/sub", subject_routes);
app.use("/cls", cls_routes);

app.listen(8000, () => {
  console.log("server started..");
});
