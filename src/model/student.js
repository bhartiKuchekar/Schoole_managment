const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  middle_name: {
    type: String,
    require: true,
  },
  last_name: {
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
  enroll_no: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Student", studentSchema);
