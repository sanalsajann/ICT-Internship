import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function Add() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    sem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '16px' }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="filled"
        value={formData.name}
        onChange={handleChange}
        InputProps={{ sx: { backgroundColor: 'white' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
      />
      <TextField
        id="department"
        name="department"
        label="Department"
        variant="filled"
        value={formData.department}
        onChange={handleChange}
        InputProps={{ sx: { backgroundColor: 'white' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
      />
      <TextField
        id="sem"
        name="sem"
        label="Semester"
        variant="filled"
        value={formData.sem}
        onChange={handleChange}
        InputProps={{ sx: { backgroundColor: 'white' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}

export default Add;