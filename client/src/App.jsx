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
import ProductList from './components/ProductsList';
import AdminDashboard from './components/AdminDashboard';
import Sidebar from './components/Sidebar'; // Admin Sidebar

const App = () => {
  const [user, setUser] = useState(null); // User state with admin flag
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const theme = createTheme({
    palette: {
      primary: { main: '#4CAF50' },
      secondary: { main: '#ff7043' },
      background: { default: '#f4f6f8' },
    },
    typography: { fontFamily: 'Arial, sans-serif' },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          {user && user.isAdmin ? <Sidebar /> : <TopBar />}
          <NavBar toggleCart={() => setIsCartOpen(!isCartOpen)} wishlistItems={[]} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/plants" element={<Plant />} />
            <Route path="/garden-event" element={<GardenEvent />} />
            <Route path="/community-post" element={<CommunityPost />} />
            <Route path="/sale" element={<SalePage />} />
            <Route
              path="/products"
              element={<ProductList products={[]} onAddToCart={() => {}} onAddToWishlist={() => {}} />}
            />
             <Route path="/admin" element={<AdminDashboard />} /> 
          </Routes>
          {isCartOpen && <Cart cartItems={cartItems} onCloseCart={() => setIsCartOpen(false)} />}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
