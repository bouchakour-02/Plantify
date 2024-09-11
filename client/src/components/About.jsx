import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          A Passion for Growth and Innovation
        </Typography>
        <Typography variant="body1" component="p">
          My journey into the world of gardening began with a simple dream—to create a space full of life, beauty, and fresh produce. 
          What started with a few plants in my backyard quickly blossomed into a deep appreciation for the art of growing, and a newfound connection to the earth.
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'justify', mb: 4 }}>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          But as I delved deeper, I discovered that gardening wasn’t as easy as I initially thought. There were challenges, unexpected failures, 
          and moments where I questioned my abilities. From soil quality to plant care, each step required learning, patience, and persistence. 
          Yet, every challenge brought with it a valuable lesson, shaping me into the gardener I am today.
        </Typography>
        
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          I realized that many gardening products on the market didn’t live up to their promises—either they weren’t durable enough, or they didn’t simplify the process. 
          It became clear that the tools and materials I used should be as reliable as the effort I put into my garden.
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          So, I started sharing. I opened up about my experiences—both the successes and the failures—hoping to inspire others on a similar path. 
          Whether it was tips on soil care, plant varieties, or troubleshooting common problems, I found joy in offering guidance to aspiring gardeners.
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          In time, I wanted to take it further. My vision evolved to not just teach but to create. I wanted to bring carefully curated gardening products to others, 
          tools that I had personally tested and trusted. Each item in my collection is hand-selected after seasons of trial and research, ensuring it meets 
          the highest standards of quality and ease of use.
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          From seed starting kits to raised beds and a wide selection of non-GMO vegetables, herbs, and flowers, every product in my collection is designed with one goal in mind— 
          to make your gardening experience smoother and more rewarding.
        </Typography>

        <Typography variant="body1" component="p">
          Because while gardening itself may involve some dirt, hard work, and learning curves, the tools you use shouldn’t add to the struggle. 
          My mission is to empower you to grow confidently, with products that simply work for you, leaving you more time to focus on what matters most—nurturing your garden and watching it thrive.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
