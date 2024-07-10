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
        Name:'Interstellar',
        Category:'Sci-Fi',
        Director:'Christopher Nolan',
        ReleaseYear:'2014'
    },
    {
        Name:'The Pursuit of Happyness',
        Category:'Drama',
        Director:'Gabriele Muccino',
        ReleaseYear:'2006'
    },
    {
        Name:'La La Land',
        Category:'Romance',
        Director:'Damien Chazelle',
        ReleaseYear:'2016'    
    }
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
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
                
                <TableCell >{row.Category}</TableCell>
                <TableCell >{row.Director}</TableCell>
                <TableCell>{row.ReleaseYear}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }