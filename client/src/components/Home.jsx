import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeatureSection';
import GardenFavoritesSection from './GardenBoxSection';
import ImageCard from './ImageCard'; // Import the ImageCard component
import VideoSection  from './VideoSection';
import footer from './Footer' ; 
import NavBar from './NavBar';
import ProductsList from './ProductsList'; // Import the new ProductsList component
const Home = ({ handleAddToCart, handleAddToWishlist }) => {
  return (
    <div>
      {/* Hero section at the top */}
      <HeroSection />

      {/* Features section */}
      <FeaturesSection />

      {/* Garden favorites or any other sections */}
      <GardenFavoritesSection />
      {/* Video section */}
      <VideoSection />
      {/* Add the ImageCard component here */}
           {/* Products list section */}
           <ProductsList onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} />
           </div>
  );
};

export default Home;
