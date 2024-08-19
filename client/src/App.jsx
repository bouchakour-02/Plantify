import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
          <Route
            path="/create-profile"
            element={<ProtectedRoute element={<CreateProfile />} />}
          />
          <Route
            path="/plants"
            element={<ProtectedRoute element={<Plant />} />}
          />
          <Route
            path="/garden-event"
            element={<ProtectedRoute element={<GardenEvent />} />}
          />
          <Route
            path="/community-post"
            element={<ProtectedRoute element={<CommunityPost />} />}
          />
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;