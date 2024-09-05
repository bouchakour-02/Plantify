import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Plantify
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '70vh',
          backgroundColor: 'primary.main',
          color: 'white',
          textAlign: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Plantify
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Discover the best way to manage your garden.
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
          Get Started
        </Button>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          color: 'white',
          p: 2,
          mt: 'auto',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            © 2024 Plantify. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Home;
