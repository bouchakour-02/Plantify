import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Box, Avatar, Typography, Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Logout Icon
import { Link } from 'react-router-dom';

const Sidebar = ({ onLogout, isOpen }) => {  // Pass isOpen prop for smooth transitions
  return (
    <Drawer
      className={isOpen ? 'sidebar-open' : 'sidebar-closed'}  // Dynamic class based on open state
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box className="sidebar-header">
        <Avatar alt="Admin Avatar" src="/profile-pic.jpg" sx={{ width: 80, height: 80 }} />
        <Typography variant="h6" sx={{ mt: 1 }}>
          Admin Name
        </Typography>
      </Box>
      <Divider />
      <List>
        <ListItem button component={Link} to="/admin/dashboard">
          <ListItemIcon>
            <DashboardIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/users">
          <ListItemIcon>
            <PeopleIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/admin/products">
          <ListItemIcon>
            <StoreIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={Link} to="/admin/orders">
          <ListItemIcon>
            <ShoppingCartIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
      </List>
      <Divider />
      <Box p={2}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ExitToAppIcon />}
          fullWidth
          onClick={onLogout}  // Use the onLogout prop here
        >
          Logout
        </Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
