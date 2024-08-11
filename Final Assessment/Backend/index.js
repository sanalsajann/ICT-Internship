const express = require("express");
const cors = require("cors");
const Employee = require('./model');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

require("./connection");

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const newEmployee = new Employee(req.body);
    const result = await newEmployee.save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding employee" });
  }
});

app.get("/get", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ message: "Employee updated successfully", employee: updatedEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating employee" });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting employee" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});