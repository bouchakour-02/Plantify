import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function FeaturesSection() {
  return (
    <Box sx={{ py: 4, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <LocalShippingIcon sx={{ fontSize: 40, color: '#4CAF50' }} />
            <Typography variant="h6">Free Shipping Over $49</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <VerifiedIcon sx={{ fontSize: 40, color: '#4CAF50' }} />
            <Typography variant="h6">Unbeatable Quality</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <ContactSupportIcon sx={{ fontSize: 40, color: '#4CAF50' }} />
            <Typography variant="h6">Got A Question?</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <CheckCircleIcon sx={{ fontSize: 40, color: '#4CAF50' }} />
            <Typography variant="h6">Satisfaction Guarantee</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FeaturesSection;
