import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import CardGrid from './components/CardGrid';
import CardGridImage from './components/CardGridImage';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Section/>
      <CardGrid/>
      <CardGridImage/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
