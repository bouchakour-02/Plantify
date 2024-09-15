import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, IconButton } from '@mui/material';
import Sidebar from './AdminSidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MenuIcon from '@mui/icons-material/Menu';
import '../AdminDashboard.css'; // Custom styles for smooth transitions

const data = [
  { name: 'Jan', Sales: 400 },
  { name: 'Feb', Sales: 300 },
  { name: 'Mar', Sales: 200 },
  { name: 'Apr', Sales: 278 },
  { name: 'May', Sales: 189 },
  { name: 'Jun', Sales: 239 },
  { name: 'Jul', Sales: 349 },
  { name: 'Aug', Sales: 200 },
  { name: 'Sep', Sales: 349 },
  { name: 'Oct', Sales: 400 },
  { name: 'Nov', Sales: 450 },
  { name: 'Dec', Sales: 470 },
];

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open by default

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle open/close state
  };

  return (
    <Box display="flex">
      {/* Sidebar with smooth transition */}
      <Sidebar isOpen={isSidebarOpen} onLogout={() => console.log('Logout')} />

      <Box component="main" className={isSidebarOpen ? 'main-content-expanded' : 'main-content-collapsed'}>
        <IconButton onClick={toggleSidebar} sx={{ mb: 2 }}>
          <MenuIcon />
        </IconButton>

        <Grid container spacing={3}>
          {/* Sales by Country */}
          <Grid item xs={12}>
            <Typography variant="h5">Sales by Country</Typography>
            <Paper>
              <Box p={2}>
                <Typography>Country Sales Data goes here</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Website Views Chart */}
          <Grid item xs={12} md={6}>
            <Paper>
              <Box p={2}>
                <Typography variant="h6">Website Views</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Sales" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>

          {/* Daily Sales Chart */}
          <Grid item xs={12} md={6}>
            <Paper>
              <Box p={2}>
                <Typography variant="h6">Daily Sales</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
