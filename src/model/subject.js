const mongoose = require("mongoose");
const subjectSchema = new mongoose.Schema({
  classId: {
    type: Number,
    require: true,
  },
  className: {
    type: String,
    required: true,
  },
  subTeacher: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Subject", subjectSchema);
