import React, { useEffect, useState } from 'react';
import { Grid, Typography, Slider, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import axios from 'axios';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component to display each product

const SalePage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    availability: { inStock: false, outOfStock: false },
    priceRange: [0, 200],
  });

  useEffect(() => {
    // Fetch sale products from the backend
    axios.get('/api/products/sale')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching sale products:', error));
  }, []);

  const handleCheckboxChange = (e) => {
    setFilters({
      ...filters,
      availability: { ...filters.availability, [e.target.name]: e.target.checked }
    });
  };

  const handlePriceChange = (event, newValue) => {
    setFilters({
      ...filters,
      priceRange: newValue
    });
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>Sale</Typography>

      {/* Filter Sidebar */}
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="h5">Filter:</Typography>
          <FormGroup>
            <Typography variant="subtitle1">Availability</Typography>
            <FormControlLabel
              control={<Checkbox checked={filters.availability.inStock} onChange={handleCheckboxChange} name="inStock" />}
              label="In Stock"
            />
            <FormControlLabel
              control={<Checkbox checked={filters.availability.outOfStock} onChange={handleCheckboxChange} name="outOfStock" />}
              label="Out of Stock"
            />
          </FormGroup>

          <Typography variant="subtitle1">Price Range</Typography>
          <Slider
            value={filters.priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={500}
          />
        </Grid>

        {/* Product Grid */}
        <Grid item xs={9}>
          <Grid container spacing={3}>
            {products
              .filter(product => filters.availability.inStock ? product.inStock : true)
              .filter(product => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1])
              .map(product => (
                <Grid item xs={4} key={product._id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SalePage;
