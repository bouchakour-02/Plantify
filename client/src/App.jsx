import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile.jsx';
import CreateProfile from './components/CreateProfile.jsx';
import Login from './components/Login.jsx';
import Plant from './components/Plant.jsx';
import GardenEvent from './components/GardenEvent.jsx';
import CommunityPost from './components/CommunityPost.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

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
                    <Route path="/" exact component={() => <div>Home Page</div>} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
