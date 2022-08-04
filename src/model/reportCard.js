const mongoose = require("mongoose");
const reportSchema = new mongoose.Schema({
  subject: {},
});
module.exports = mongoose.model("Report", reportSchema);
