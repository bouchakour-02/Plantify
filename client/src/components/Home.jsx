import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Welcome to Plantify</h1>
            <p>Your personal garden management app.</p>
            
            <div style={{ marginTop: '20px' }}>
                <Link to="/login">
                    <button style={{ marginRight: '10px' }}>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
        </div>
    );
};

export default home;
