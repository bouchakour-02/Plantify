import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          <strike>${product.oldPrice}</strike> <strong>${product.price}</strong> {product.discount}% off
        </Typography>
        <Button variant="contained" color="primary">Choose options</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
