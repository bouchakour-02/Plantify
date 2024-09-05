import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./components/Profile";
import CreateProfile from "./components/CreateProfile";
import Login from "./components/Login";
import Plant from "./components/Plant";
import GardenEvent from "./components/GardenEvent";
import CommunityPost from "./components/CommunityPost";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeatureSection';
import Footer from './components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GardenFavoritesSection from './components/GardenBoxSection';
const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green color similar to the target website
    },
    secondary: {
      main: '#ff7043', // Orange color similar to the target website
    },
    background: {
      default: '#f9f5f0', // Light beige background
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Replace with the target website's font if needed
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <TopBar />
          <NavBar />
          <HeroSection />
          <FeaturesSection />
          <GardenFavoritesSection />
          <Routes>
          
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
            <Route path="/create-profile" element={<ProtectedRoute component={CreateProfile} />} />
            <Route path="/plants" element={<ProtectedRoute component={Plant} />} />
            <Route path="/garden-event" element={<ProtectedRoute component={GardenEvent} />} />
            <Route path="/community-post" element={<ProtectedRoute component={CommunityPost} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
