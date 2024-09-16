// src/components/ElevatedPlanters.jsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import axios from 'axios';

const ElevatedPlanters = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products?category=Elevated Planters');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>Elevated Planters</Typography>
      {products.map((product) => (
        <Card key={product.id} sx={{ display: 'flex', marginBottom: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={product.imageUrl}
            alt={product.name}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h5" variant="h5">
              {product.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {product.description}
            </Typography>
            <Button variant="contained">Add to Cart</Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default ElevatedPlanters;
