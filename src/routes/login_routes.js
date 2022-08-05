const express = require("express");
const routes = express.Router();
const LoginController = require("../controller/login_controller");

routes.get("/all_registered_user/", LoginController.all_registered_user);
routes.post("/", LoginController.register);
routes.post("/login/", LoginController.login);

module.exports = routes;
