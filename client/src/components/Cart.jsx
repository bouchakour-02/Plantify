import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Cart.css';

const Cart = ({ cartItems, toggleCart, onClose }) => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    // If there are cart items, fetch recommended products excluding the last one added
    if (cartItems.length > 0) {
      const lastAddedProduct = cartItems[cartItems.length - 1];
      fetchRecommendedProducts(lastAddedProduct.id);
    }
  }, [cartItems]);

  const fetchRecommendedProducts = async (excludeId) => {
    try {
      const response = await axios.get(`/api/products/recommended/${excludeId}`);
      setRecommendedProducts(response.data);
    } catch (error) {
      console.error('Error fetching recommended products:', error);
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      )}

      {/* Display recommended products */}
      <div className="cart-recommendations">
        <h3>You may also like</h3>
        <div className="recommended-items">
          {recommendedProducts.map((product) => (
            <div key={product._id} className="recommended-item">
              <img src={product.imageUrl} alt={product.name} />
              <p>{product.name}</p>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
