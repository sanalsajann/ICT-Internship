import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(Name,Department,Semester)
     {
    return {Name,Department,Semester};
  }
  
  const rows = [
    {
    Name:'Sanal',
    Department:'Computer Science',
    Semester:'S3'
    },
    {
      Name:'Aadit',
      Department:'Electrical',
      Semester:'S4'
    }
  ];
  
  export default function Records() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Semester</TableCell>
              
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
                
                <TableCell >{row.Department}</TableCell>
                <TableCell >{row.Semester}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }