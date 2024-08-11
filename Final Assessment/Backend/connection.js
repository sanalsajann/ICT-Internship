const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://sanalsajan916:T7Eu3g1auNHGIaIE@cluster0.ibrjg5n.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0',{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
 
  