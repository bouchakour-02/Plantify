// src/components/CommunityFeed.jsx
import React, { useState, useEffect } from 'react';
import axios from '../axios'; // Your configured Axios instance

const CommunityFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/community/posts'); // Fetch community posts from the backend
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="community-feed">
      <h2>Community Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>Posted by {post.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommunityFeed;
