import React from 'react';
import { Card, CardMedia, Box } from '@mui/material';

const ImageCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Card sx={{ maxWidth: 1500 }}>
        <CardMedia
          component="img"
          alt="Epic Gardening Image"
          src="//shop.epicgardening.com/cdn/shop/files/EPIC_GARDENING___71524_4064_2.jpg?v=1722314096&width=1500"
          srcSet="
            //shop.epicgardening.com/cdn/shop/files/EPIC_GARDENING___71524_4064_2.jpg?v=1722314096&width=165 165w,
            //shop.epicgardening.com/cdn/shop/files/EPIC_GARDENING___71524_4064_2.jpg?v=1722314096&width=360 360w,
            //shop.epicgardening.com/cdn/shop/files/EPIC_GARDENING___71524_4064_2.jpg?v=1722314096&width=535 535w,
            //shop.epicgardening.com/cdn/shop/files/EPIC_GARDENING___71524_4064_2.jpg?v=1722314096&width=750 750w,
            //shop.epicgardening.com/cdn/shop/files/EPIC_GARDENING___71524_4064_2.jpg?v=1722314096&width=1070 1070w,
            //shop.epicgardening.com/cdn/shop/files/EPIC_GARDENING___71524_4064_2.jpg?v=1722314096&width=1500 1500w"
          sizes="(min-width: 1500px) 700px,
            (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
          width="1500"
          height="1500"
          sx={{ objectFit: 'cover' }}
        />
      </Card>
    </Box>
  );
};

export default ImageCard;
