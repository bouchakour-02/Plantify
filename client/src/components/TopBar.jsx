import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function TopBar() {
  return (
    <Box sx={{ backgroundColor: '#4CAF50', color: 'white', py: 1 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="right">
          All New Raised Garden Beds! | Shop Now 🌱
        </Typography>
      </Container>
    </Box>
  );
}

export default TopBar;
