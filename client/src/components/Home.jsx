import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeatureSection';
import GardenFavoritesSection from './GardenBoxSection'; // Add this section if you have one

const Home = () => {
  return (
    <div>
      {/* Hero section at the top */}
      <HeroSection />

      {/* Features section */}
      <FeaturesSection />

      {/* Garden favorites or any other sections */}
      <GardenFavoritesSection />
    </div>
  );
};

export default Home;
