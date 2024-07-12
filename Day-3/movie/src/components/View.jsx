import React, { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';

const View = () =>{
  const [rows,setRows]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:4000/movies').then((res)=>{
        console.log(res);
        setRows(res.data);
      })
},[])

function deleteMovie(p)
{
  axios.delete('https://localhost:4000/movieremoval/'+p).then((res)=>{
    alert('Data deleted');
    windows.location.reload()
  }) .catch((error)=>{
      console.log(error)
  })
}

// const rows = [
//   {
//     Name: 'Interstellar',
//     Category: 'Sci-Fi',
//     Director: 'Christopher Nolan',
//     ReleaseYear: '2014',
//     Poster:'interstellar.jpg'
//   },
//   {
//     Name: 'The Pursuit of Happyness',
//     Category: 'Drama',
//     Director: 'Gabriele Muccino',
//     ReleaseYear: '2006',
//     Poster:'pursuit of happyness.jpg'

//   },
//   {
//     Name: 'La La Land',
//     Category: 'Romance',
//     Director: 'Damien Chazelle',
//     ReleaseYear: '2016',
//     Poster:'la la land.jpg'

//   },
// ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Release Year</TableCell>
            {/* <TableCell>Poster</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.movieName}
              </TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.movieDirector}</TableCell>
              <TableCell>{row.releaseYear}</TableCell>
              <TableCell><Button>Edit</Button></TableCell>
              <TableCell><Button onClick={deleteMovie(row.id)}>Delete</Button></TableCell>
              {/* <TableCell>
                <img src={row.Poster} alt={row.Name} width="170" height="250" />
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default View;