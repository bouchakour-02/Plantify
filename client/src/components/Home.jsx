import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeatureSection';
import GardenFavoritesSection from './GardenBoxSection';
import ImageCard from './ImageCard'; // Import the ImageCard component
import VideoSection  from './VideoSection';
import footer from './Footer' ; 
const Home = () => {
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
       
    </div>
  );
};

export default Home;
