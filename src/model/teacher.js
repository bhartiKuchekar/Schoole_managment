const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  sub: {
    type: String,
    require: true,
  },
  class: {
    type: Number,
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
  email: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Teacher", teacherSchema);
