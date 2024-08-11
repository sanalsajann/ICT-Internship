import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import "../App.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (employee) => {
    setCurrentEmployee(employee);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentEmployee(null);
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:3001/update/${currentEmployee._id}`, currentEmployee)
      .then(() => {
        fetchData();
        handleClose();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    console.log("Deleting employee with id:", id);
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((response) => {
        console.log("Delete response:", response.data);
        fetchData();
      })
      .catch((err) => console.log("Delete error:", err));
  };

  const handleInputChange = (e) => {
    setCurrentEmployee({
      ...currentEmployee,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Mar">
      <Grid container spacing={6}>
        {data.map((val, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <img
                  src={val.img_url}
                  className="img-fluid rounded-start"
                  width="100%"
                  alt="image"
                />
                <Typography gutterBottom variant="h5">
                  {val.EmpName}
                </Typography>
                <Typography component="div">{val.designation}</Typography>
                <Typography component="div">{val.empId}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
              <Button 
                size="small" 
                variant="contained" 
                color="secondary"
                onClick={() => handleDelete(val._id)}
                >
                Delete
              </Button>
                <Button 
                  size="small" 
                  variant="contained" 
                  color="secondary"
                  onClick={() => handleUpdate(val)}
                >
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Employee</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="EmpName"
            label="Employee Name"
            type="text"
            fullWidth
            variant="standard"
            value={currentEmployee?.EmpName || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="designation"
            label="Designation"
            type="text"
            fullWidth
            variant="standard"
            value={currentEmployee?.designation || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="empId"
            label="Employee ID"
            type="text"
            fullWidth
            variant="standard"
            value={currentEmployee?.empId || ''}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;