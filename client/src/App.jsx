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
import CommunityInteraction from "./components/CommunityInteraction";

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
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  {/* Only display HeroSection, FeaturesSection, and GardenFavoritesSection on the homepage */}
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/plants" element={<Plant />} />
            <Route path="/garden-event" element={<GardenEvent />} />
            <Route path="/community-post" element={<CommunityPost />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
