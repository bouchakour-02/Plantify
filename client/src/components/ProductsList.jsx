import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../ProductList.css'; // Make sure to link the improved CSS
import PropTypes from 'prop-types'; // Import PropTypes

const ProductsList = ({ onAddToCart, onAddToWishlist }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Making API request to /api/products");
        const response = await axios.get('http://localhost:5000/api/products'); // Adjust the API URL as needed
        console.log(response.data); 
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-list-container">
      <h2>Favorite Supplies</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                <p className="price">
                  {product.sale ? (
                    <>
                      <span className="old-price">${product.oldPrice}</span>
                      <span className="new-price">${product.price}</span>
                    </>
                  ) : (
                    <span>${product.price}</span>
                  )}
                </p>
                
                <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
                  Add to Cart
                </button>
                
                <button className="add-to-wishlist-btn" onClick={() => onAddToWishlist(product)}>
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

// Define PropTypes
ProductsList.propTypes = {
  onAddToCart: PropTypes.func.isRequired, // Function type and required
  onAddToWishlist: PropTypes.func.isRequired // Function type and required
};

export default ProductsList;
