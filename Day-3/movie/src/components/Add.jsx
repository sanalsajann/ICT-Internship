import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Add = () => {
  const [form, setForm] = useState({
    mname: '',
    category: '',
    director: '',
    releaseyear: '',
    poster: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={2} direction="column">
        <TextField
          id="mname-input"
          label="Movie Name"
          variant="standard"
          name="mname"
          value={form.mname}
          onChange={handleChange}
        />
        <br />
        <TextField
          id="category-input"
          label="Category"
          variant="standard"
          name="category"
          value={form.category}
          onChange={handleChange}
        />
        <br />
        <TextField
          id="director-input"
          label="Director"
          variant="standard"
          name="director"
          value={form.director}
          onChange={handleChange}
        />
        <br />
        <TextField
          id="releaseyear-input"
          label="Release Year"
          variant="standard"
          name="releaseyear"
          value={form.releaseyear}
          onChange={handleChange}
        />
        <br />
        <TextField
          id="poster-input"
          label="Poster URL"
          variant="standard"
          name="poster"
          value={form.poster}
          onChange={handleChange}
        />
        <br />
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Add Movie
        </Button>
      </Stack>
    </Box>
  );
};

export default Add;