import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import SlideShow from "../components/Cards/SlideShow"

function Home() {
  return (
    <>
      <HeroSection />
    
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
