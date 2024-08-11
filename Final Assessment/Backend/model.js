const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});

module.exports = mongoose.model('Employee', employeeSchema);