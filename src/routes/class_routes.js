const express = require("express");
const class_Controller = require("../controller/class_Controller");

const routes = express.Router();

routes.get("/", class_Controller.classList);
routes.post("/add_class", class_Controller.addClass);
routes.patch("/update_class/:id", class_Controller.editClass);
routes.delete("/delete_class/:id", class_Controller.deletClass);

module.exports = routes;
