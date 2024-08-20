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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div>Welcome to Plantify</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
          <Route path="/create-profile" element={<ProtectedRoute component={CreateProfile} />} />
          <Route path="/plants" element={<ProtectedRoute component={Plant} />} />
          <Route path="/garden-event" element={<ProtectedRoute component={GardenEvent} />} />
          <Route path="/community-post" element={<ProtectedRoute component={CommunityPost} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
