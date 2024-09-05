import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

function HeroSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        backgroundColor: '#f9f5f0',
        color: '#4CAF50',
        textAlign: 'center',
        flexDirection: 'column',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom>
          PLANTERS FIT FOR EVERY GARDEN
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Shop Patio Planters & More!
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
      Explore Now        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;
