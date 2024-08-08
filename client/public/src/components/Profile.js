// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import axios from '../../axios';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await axios.get('/profiles');
            setProfile(response.data);
        };

        fetchProfile();
    }, []);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{profile.firstName} {profile.lastName}</h1>
            <p>Location: {profile.location}</p>
            <p>Preferences: {profile.preferences}</p>
        </div>
    );
};

export default Profile;
