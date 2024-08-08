import React, { useState } from 'react';
import axios from '../axios';

const CreateProfile = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        location: '',
        preferences: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/profiles', formData);
            // Handle success, redirect, or update UI as needed
        } catch (error) {
            console.error('Error creating profile:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
            />
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
            />
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                required
            />
            <input
                type="text"
                name="preferences"
                value={formData.preferences}
                onChange={handleChange}
                placeholder="Preferences"
                required
            />
            <button type="submit">Create Profile</button>
        </form>
    );
};

export default CreateProfile;
