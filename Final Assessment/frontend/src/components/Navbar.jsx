import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#9C27B0' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EmployeeApp
        </Typography>
        <Box>
          <Link to="/" style={{ color: 'inherit' }}>
            <IconButton color="inherit" aria-label="home">
              <HomeIcon />
            </IconButton>
          </Link>
          <Link to="/add" style={{ color: 'inherit' }}>
            <IconButton color="inherit" aria-label="add">
              <AddIcon />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;