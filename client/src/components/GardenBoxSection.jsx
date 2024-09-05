import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const GardenFavoritesSection = () => {
  const favorites = [
    {
      title: 'Raised Garden Beds',
      image: 'https://www.northeastnursery.com/web_images/300001155-composite-raised-garden-bed-kit-two-tier-rectangle.jpg',  // Replace with your image link
      link: '#'
    },
    {
      title: 'Watering & Irrigation',
      image: 'https://gardensnursery.com/wp-content/uploads/2020/02/How-to-Watering-Plants-of-Garden.jpg',  // Replace with your image link
      link: '#'
    },
    {
      title: 'Live Outdoor Plants',
      image: 'https://cdn-cms.f-static.net/uploads/2039516/2000_5d03e5ca7d540.png',  // Replace with your image link
      link: '#'
    }
  ];

  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        GARDEN  FAVORITES SECTION
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {favorites.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ borderRadius: 2, overflow: 'hidden' }}>
              <CardMedia
                component="img"
                height="300"
                image={item.image}
                alt={item.title}
              />
              <CardContent sx={{ backgroundColor: '#2E7D32', color: '#FFF', textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Button
                  variant="outlined"
                  color="inherit"
                  href={item.link}
                  sx={{ mt: 1 }}
                >
                 Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GardenFavoritesSection;
