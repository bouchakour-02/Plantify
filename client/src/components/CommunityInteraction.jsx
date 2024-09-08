// src/components/CommunityInteraction.jsx
import React from 'react';
import CreatePost from './CreatePost';
import CommunityFeed from './CommunityPost';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
const CommunityInteraction = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Community Interaction
      </Typography>
      <CreatePost />
      <CommunityFeed />
    </Container>
  );
};

export default CommunityInteraction;
