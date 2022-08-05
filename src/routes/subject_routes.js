const express = require("express");
const subController = require("../controller/subject_controller");

const routes = express.Router();

routes.get("/", subController.subList);
routes.get("/get_sub_by_classid/:id", subController.subListById);
routes.post("/add_sub", subController.addSub);
routes.patch("/update_sub/:id", subController.editSub);
routes.delete("/delete_sub/:id", subController.deletSub);

module.exports = routes;
