const express=require('express');   //the first two lines a reapplicable for any programs, 'express' is predefined, whereas express in const express can be interchanged 
const app=new express();
const PORT=4000;  //any number above 1024 is applicable
const employeeModel=require('./model/employeeData')
require('./connection');
//to fetch the employee data
app.get('/employees',async(req,res)=>{
    try{
        const data=await employeeModel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
    }

})

app.listen(PORT,()=>{  // to keep the port running
    console.log('Server is running on PORT 4000')       
})