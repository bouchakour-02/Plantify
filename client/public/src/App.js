// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import CreateProfile from './components/CreateProfile';
import Login from './components/Login';
import Plant from './components/Plant';
import GardenEvent from './components/GardenEvent';
import CommunityPost from './components/CommunityPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login" component={Login} />
                    <ProtectedRoute path="/profile" component={Profile} />
                    <ProtectedRoute path="/create-profile" component={CreateProfile} />
                    <ProtectedRoute path="/plant" component={Plant} />
                    <ProtectedRoute path="/garden-event" component={GardenEvent} />
                    <ProtectedRoute path="/community-post" component={CommunityPost} />
                    {/* Add more protected routes as needed */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
