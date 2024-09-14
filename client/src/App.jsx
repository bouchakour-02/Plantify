import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import CreateProfile from './components/CreateProfile';
import Login from './components/Login';
import Plant from './components/Plant';
import GardenEvent from './components/GardenEvent';
import CommunityPost from './components/CommunityPost';
import Home from './components/Home';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SalePage from './components/SalePage';
import Cart from './components/Cart';
import ProductList from './components/ProductsList'; // Ensure you have this component

const App = () => {
  const [cartItems, setCartItems] = useState([]); // Cart state
  const [wishlistItems, setWishlistItems] = useState([]); // Wishlist state
  const [isCartOpen, setIsCartOpen] = useState(false); // Manage cart visibility

  const [products, setProducts] = useState([
    { id: 1, name: 'Epic 4-Cell Seed Starting Trays', price: 19.99, image: 'image1.jpg' },
    { id: 2, name: 'Epic Grow Bags - Lined', price: 16.49, image: 'image2.jpg' },
    { id: 3, name: 'Germination Domes', price: 59.99, image: 'image3.jpg' },
    { id: 4, name: '5" Cube Pot', price: 4.00, image: 'image4.jpg' }
  ]);

  const [recommendations] = useState([
    { id: 5, name: 'Recommended Product 1', price: 29.99, image: 'recommended1.jpg' },
    { id: 6, name: 'Recommended Product 2', price: 39.99, image: 'recommended2.jpg' }
  ]);

  // Function to add product to the cart
  const handleAddToCart = (product) => {
    console.log('handleAddToCart:', handleAddToCart); // Debugging
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Automatically open the cart when an item is added
  };

  // Function to add product to the wishlist
  const handleAddToWishlist = (product) => {
    if (!wishlistItems.find((item) => item.id === product.id)) {
      setWishlistItems((prevItems) => [...prevItems, product]);
    }
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#4CAF50',
      },
      secondary: {
        main: '#ff7043',
      },
      background: {
        default: '#f9f5f0',
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <TopBar />
          <NavBar toggleCart={toggleCart} wishlistItems={wishlistItems} /> {/* Pass toggleCart and wishlistItems to NavBar */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/plants" element={<Plant />} />
            <Route path="/garden-event" element={<GardenEvent />} />
            <Route path="/community-post" element={<CommunityPost />} />
            <Route path="/sale" element={<SalePage />} />
            <Route
              path="/products"
              element={<ProductList products={products} onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} />}
            />
          </Routes>
          {isCartOpen && (
            <Cart
            cartItems={cartItems}
            onRemoveItem={handleRemoveItem}
            recommendations={[]} // Pass recommendations if needed
            onCloseCart={() => setIsCartOpen(false)} // Pass function to close the cart
            />
          )}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
