import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import ProductsList from './components/ProductsList';
import AdminDashboard from './components/AdminDashboard';
import Sidebar from './components/AdminSidebar'; // Admin Sidebar
import ProtectedRoute from './components/ProtectedRoute';
import StripeContainer from './components/StripeContainer';
import SearchResults from './components/SearchResults';
import WeatherComponent from './components/weatherComponent';
import About from './components/About';


const App = () => {
  const [user, setUser] = useState(null); // User state with admin flag
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state for login check

  const theme = createTheme({
    palette: {
      primary: { main: '#4CAF50' },
      secondary: { main: '#ff7043' },
      background: { default: '#f4f6f8' },
    },
    typography: { fontFamily: 'Arial, sans-serif' },
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userInfo = JSON.parse(localStorage.getItem('user')); // Assuming user data is stored in localStorage after login

    if (token && userInfo) {
      setIsLoggedIn(true);
      setUser(userInfo); // Set user info to check for isAdmin
    }
    setLoading(false); // Set loading to false after checking token
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // Remove user info
    setIsLoggedIn(false);
    setUser(null); // Reset user to null on logout
    alert('You have been logged out.');  // Optional: Display a message
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = (product) => {
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    alert(`${product.name} added to wishlist!`);
  };

  // Show loading indicator while checking for login state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {user && user.isAdmin ? <Sidebar /> : <TopBar />}
      <Router>
        {/* Always show NavBar and Footer */}
        <NavBar
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          toggleCart={() => setIsCartOpen(!isCartOpen)}
          wishlistItems={wishlist} // Pass wishlist items to NavBar
        />
        
        <div className="App">
          {/* Conditional rendering of admin Sidebar */}
        
         
          <Routes>
            {/* Public Routes: These can be accessed without login */}
            <Route path="/" element={<Home />} />
            <Route path="/sale" element={<SalePage />} />


            <Route 
            path="/products" 
            element={<ProductsList 
            onAddToCart={handleAddToCart} 
            onAddToWishlist={handleAddToWishlist} />} />
           
           
           <Route path="/about" element={<About />} />
            <Route path="/community-post" element={<CommunityPost />} />
            <Route path="/plants" element={<Plant />} />
            <Route path="/garden-event" element={<GardenEvent />} />
            <Route path="/checkout" element={<StripeContainer />} />
            {/* Restricted Routes: These require login */}
            <Route path="/profile" element={<ProtectedRoute component={Profile} isLoggedIn={isLoggedIn} />} />
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/admin" element={<ProtectedRoute component={AdminDashboard} isLoggedIn={isLoggedIn} />} />
            <Route path="/search" element={<SearchResults />} />
            {/* Login Route: Available to everyone */}
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />

            {/* Catch-all route: Redirects to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          {/* Cart rendering */}
          {isCartOpen && <Cart cartItems={cartItems} onCloseCart={() => setIsCartOpen(false)} />}

          {/* Always show Footer */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
