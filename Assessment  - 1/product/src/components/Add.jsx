import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios'

const Add = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    category:'',
  });

  function valueFetch(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendData = () => {
    console.log(form);
    axios.post('https://fakestoreapi.com/products',form)
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={2} direction="column" alignItems="center">
        <TextField
        required
          id="outline-required"
          label="Required - Product Name"
          variant="standard"
          name="title"
          value={form.title}
          onChange={valueFetch}
        />
        <br />
        <TextField
        required
          id="outline-required"
          label="Required - Description"
          variant="standard"
          name="description"
          value={form.description}
          onChange={valueFetch}
        />
        <br />
        <TextField
        required
          id="outline-required"
          label="Required - Price"
          variant="standard"
          name="price"
          value={form.price}
          onChange={valueFetch}
        />
        <br />
        <TextField
        required
          id="outline-required"
          label="Required - Category"
          variant="standard"
          name="category"
          value={form.category}
          onChange={valueFetch}
        />
        <br />
        <Button variant="contained" color="success" onClick={sendData}>
          Add Product
        </Button>
      </Stack>
    </Box>
  );
};

export default Add;