const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
  userName: {
    type: "String",
    require: "true",
  },
  pswd: {
    type: "String",
    require: "true",
  },
  role: {
    type: "String",
    require: "true",
  },
});

module.exports = mongoose.model("Login", loginSchema);
