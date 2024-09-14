import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = ({ userId }) => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`/api/profiles/${userId}`);
                setProfileData(response.data);
            } catch (error) {
                console.error('Error fetching profile data', error);
            }
        };

        fetchProfile();
    }, [userId]);

    if (!profileData) return <div>Loading...</div>;

    return (
        <div className="profile-page">
            <h1>{profileData.user.name}'s Profile</h1>
            <img src={profileData.user.profilePicture} alt={`${profileData.user.name}'s profile`} />
            <p>Email: {profileData.user.email}</p>
            <h2>Recent Posts</h2>
            <ul>
                {profileData.recentPosts.map((post) => (
                    <li key={post._id}>
                        <p>{post.content}</p>
                        <small>{new Date(post.dateValue).toLocaleDateString()}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfilePage;
