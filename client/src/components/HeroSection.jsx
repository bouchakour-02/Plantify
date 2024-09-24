import React from 'react';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import '../hero.css' ; 



const HeroSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f5f0', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#2E7D32', mb: 3 }}>
              20% OFF VERTICAL PLANTERS!
            </Typography>
            <Typography variant="body1" sx={{ color: '#4A4A4A', mb: 4 }}>
              Build Your Dream Space For Less
            </Typography>
            <Button variant="contained"  color="secondary" sx={{ textTransform: 'none', backgroundColor: '#e76e55' }}>
              Shop Now
            </Button>
          </Grid>

          {/* Right Side: Image Section */}
          <Grid item xs={12} md={6}>
            <img
              src="https://shop.epicgardening.com/cdn/shop/files/EPIC_GARDENING_005224_3450_6e8e09ca-91a2-4504-9f50-3a4034f1cb4a.jpg?v=1724694100&width=1500"
              alt="Vertical Planters"
              className="wavy-image"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
