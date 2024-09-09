import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './Logo'; // Import the Logo component
import '../NavBar.css'; // Add your CSS here if needed

function NavBar() {
  return (
    <AppBar position="static" color="transparent" elevation={0} className="app-bar">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <div className="logo-container">
            <Logo />
          </div>

          {/* Menu Items */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center'  }}>
          
            <Button className="menu-button">
              Garden Beds & Supplies <span className="arrow">▼</span>
            </Button>
            <Button className="menu-button">
               Plants <span className="arrow">▼</span>
            </Button>
            <Button className="menu-button">
              Soil Care <span className="arrow">▼</span>
            </Button>
            <Button className="menu-button">
            Seeds<span className="arrow">▼</span>
            </Button>
            <Button className="menu-button">
              Featured <span className="arrow">▼</span>
            </Button>
            <Button className="menu-button">
              About us
            </Button>
          </Box>

          {/* Icons */}
          <Box className="menu-icons">
            <IconButton ><SearchIcon /></IconButton>
            <IconButton ><FavoriteIcon /></IconButton>
            <IconButton ><AccountCircleIcon /></IconButton>
            <IconButton ><ShoppingCartIcon /></IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
