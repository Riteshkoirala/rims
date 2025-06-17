import React from 'react';
import Hero from '../components/Hero';
import QuickInfo from '../components/QuickInfo';
import Welcome from '../components/Welcome';
import Features from '../components/Features';
import News from '../components/News';
import HomeGallery from '../components/HomeGallery';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import { Box } from '@mui/material';

function HomePage() {
  return (
    <Box>
      <Hero />
      <QuickInfo />
      <Welcome />
      <Features />
      <News />
      <HomeGallery />
      <Testimonials />
      <CallToAction />
    </Box>
  );
}

export default HomePage; 