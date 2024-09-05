import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './Logo';

function NavBar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Logo />
          </Typography>
          <Button color="inherit">Garden Beds & Supplies</Button>
          <Button color="inherit">Seed & Plants</Button>
          <Button color="inherit">Soil Care</Button>
          <Button color="inherit">Shop Bundles</Button>
          <Button color="inherit">Featured</Button>
          <Button color="inherit">Sale</Button>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit"><SearchIcon /></IconButton>
            <IconButton color="inherit"><FavoriteIcon /></IconButton>
            <IconButton color="inherit"><AccountCircleIcon /></IconButton>
            <IconButton color="inherit"><ShoppingCartIcon /></IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
