const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  f_name: {
    type: String,
    require: true,
  },
  l_name: {
    type: String,
    require: true,
  },
  pswd: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  mob_number: {
    type: Number,
    require: true,
  },
  classId: {
    type: Number,
  },
  classSec: {
    type: String,
  },
  roll_no: {
    type: Number,
  },
});

module.exports = mongoose.model("Login", loginSchema);
