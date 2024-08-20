// src/components/CommunityPost.js
import React, { useEffect, useState } from 'react';
import axios from '../axios';

const CommunityPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('/communityposts');
            setPosts(response.data);
        };

        fetchPosts();
    }, []);

    if (!posts.length) {
        return <div>No community posts found.</div>;
    }

    return (
        <div>
            <h1>Community Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <h2>{post.content}</h2>
                        <p>Date: {post.dateValue}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommunityPost;