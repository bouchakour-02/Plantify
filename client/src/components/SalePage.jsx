import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, Button, Slider, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import '../Sale.css';  // Include your CSS here

const Sale = () => {
  const [products, setProducts] = useState([]);
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);

  useEffect(() => {
    fetchSaleProducts();
  }, [inStock, outOfStock, priceRange]);

  const fetchSaleProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products/sale', {
        params: {
          inStock,
          outOfStock,
          minPrice: priceRange[0],
          maxPrice: priceRange[1],
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching sale products:', error);
    }
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Sale
      </Typography>

      {/* Filter Section */}
      <div className="filter-product-grid">
        <div className="filter-section">
          <Typography variant="h6">Filter:</Typography>

          {/* Stock Availability Filters */}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={inStock}
                  onChange={() => setInStock(!inStock)}
                />
              }
              label="In Stock"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={outOfStock}
                  onChange={() => setOutOfStock(!outOfStock)}
                />
              }
              label="Out of Stock"
            />
          </FormGroup>

          {/* Price Range Slider */}
          <Typography variant="h6" gutterBottom>
            Price Range
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            min={0}
            max={500}
            step={10}
            marks={[
              { value: 0, label: '$0' },
              { value: 500, label: '$500' },
            ]}
          />
        </div>

        {/* Products Grid Section */}
        <div className="product-grid-section">
          <Grid container spacing={4}>
            {products.length ? (
              products.map((product) => (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Card>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.description}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        ${product.price} {product.discount && `(${product.discount}% off)`}
                      </Typography>
                      <Button variant="contained" color="primary">
                        Choose Options
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography>No products available in this range</Typography>
            )}
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default Sale;
