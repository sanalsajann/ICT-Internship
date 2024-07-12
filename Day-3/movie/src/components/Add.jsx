import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios'

const Add = () => {
  const [form, setForm] = useState({
    movieName: '',
    category: '',
    movieDirector: '',
    releaseYear:'',
  });

  function valueFetch(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendData = () => {
    console.log(form);
    axios.post('http://localhost:4000/newmovie',form)
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
          label="Required - Movie Name"
          variant="standard"
          name="movieName"
          value={form.movieName}
          onChange={valueFetch}
        />
        <br />
        <TextField
        required
          id="outline-required"
          label="Required - Director"
          variant="standard"
          name="movieDirector"
          value={form.movieDirector}
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
        <TextField
        required
          id="outline-required"
          label="Required - Release Year"
          variant="standard"
          name="releaseYear"
          value={form.releaseYear}
          onChange={valueFetch}
        />
        <br />
        <Button variant="contained" color="success" onClick={sendData}>
          Add Movie
        </Button>
      </Stack>
    </Box>
  );
};

export default Add;