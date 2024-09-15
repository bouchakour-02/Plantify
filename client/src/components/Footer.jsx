import React from 'react';
import axios from 'axios';
import { Box, Container, Grid, Typography, TextField, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Logo from './Logo';
import  { useState } from 'react';
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-email', { email });
      alert('Thank you for subscribing!');
      setEmail(''); // Clear the input after sending
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to subscribe. Please try again later.');
    }
  };
  return (
    <Box sx={{ backgroundColor: '#99D18F', color: '#4A4A4A', pt: 8, pb: 2, mt: 8 }}>
      <Container  maxWidth="lg" >
        <Grid container spacing={4}>
          {/* Learn to Grow Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2E7D32' }}>
              LEARN TO GROW.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Join our community for future updates.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#FFF', p: 1, borderRadius: 2 }}>
              <TextField
                label="Email"
                variant="standard"
                size="small"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{ disableUnderline: true }}
                required
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ ml: 1, borderRadius: 2 }}
              >
                →
              </Button>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              <IconButton aria-label="Facebook" href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Instagram"  href="#">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="YouTube" href="#">
                <YouTubeIcon />
              </IconButton>
              <IconButton aria-label="Twitter" href="#">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="Pinterest" href="#">
                <PinterestIcon />
              </IconButton>
            </Box>
            <Logo></Logo>
          </Grid>

          {/* Shop Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2E7D32' }}>
              SHOP
            </Typography>
            <Typography variant="body1">Shop All</Typography>
            <Typography variant="body1">Best Sellers</Typography>
            <Typography variant="body1">New Arrivals</Typography>
            <Typography variant="body1">Raised Beds</Typography>
            <Typography variant="body1">Seed Starting Supplies</Typography>
            <Typography variant="body1">Vegetable & Flower Seeds</Typography>
            <Typography variant="body1">Container Gardening</Typography>
          </Grid>

          {/* Information Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2E7D32' }}>
              INFORMATION
            </Typography>
            <Typography variant="body1">About Us</Typography>
            <Typography variant="body1">School Garden Program</Typography>
            <Typography variant="body1">Customer Gardens</Typography>
            <Typography variant="body1">Shipping Policy</Typography>
            <Typography variant="body1">Return & Refund Policy</Typography>
            <Typography variant="body1">Privacy Policy</Typography>
            <Typography variant="body1">Terms and Conditions</Typography>
          </Grid>

          {/* Customer Service Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2E7D32' }}>
              CUSTOMER SERVICE
            </Typography>
            <Typography variant="body1">Track Your Order</Typography>
            <Typography variant="body1">Ask a Question</Typography>
            <Typography variant="body1">FAQs</Typography>
            <Typography variant="body1">Returns</Typography>
            <Typography variant="body1">Customer Service Hours</Typography>
            <Typography variant="body1">Contact Us</Typography>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ mt: 5, textAlign: 'center', pb: 2 }}>
          <Typography variant="body2" color="textSecondary">
            © 2024, Plantify
          </Typography>
        </Box>
      </Container>
      {/* Forest Scene SVG */}
      <Box sx={{ width: '100%', mt: 4 }}>
        <img
          src="https://shop.epicgardening.com/cdn/shop/t/101/assets/forest-scene.svg?v=174793550601169750281712768801"
          alt="Forest Scene"
          style={{ width: '100%', display: 'block' }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
