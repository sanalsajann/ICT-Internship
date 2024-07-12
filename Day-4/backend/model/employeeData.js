const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({
    empName:String,
    empDept:String,
    empExp:String,
    empSalary:Number
})
const EmployeeData=mongoose.model('employee',employeeSchema);
module.exports=EmployeeDatam