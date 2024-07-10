import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  {
    Name: 'Interstellar',
    Category: 'Sci-Fi',
    Director: 'Christopher Nolan',
    ReleaseYear: '2014',
    Poster:'interstellar.jpg'
  },
  {
    Name: 'The Pursuit of Happyness',
    Category: 'Drama',
    Director: 'Gabriele Muccino',
    ReleaseYear: '2006',
    Poster:'pursuit of happyness.jpg'

  },
  {
    Name: 'La La Land',
    Category: 'Romance',
    Director: 'Damien Chazelle',
    ReleaseYear: '2016',
    Poster:'la la land.jpg'

  },
];

export default function Records() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Release Year</TableCell>
            <TableCell>Poster</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell>{row.Category}</TableCell>
              <TableCell>{row.Director}</TableCell>
              <TableCell>{row.ReleaseYear}</TableCell>
              <TableCell>
                <img src={row.Poster} alt={row.Name} width="170" height="250" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}