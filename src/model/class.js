const mongoose = require("mongoose");
const classSchema = new mongoose.Schema({
  classId: {
    type: Number,
    require: true,
  },
  classSec: {
    type: String,
    required: true,
  },
  classTeacher: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("modelClass", classSchema);
