import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';
import TrovesAISection from './components/TrovesAISection';
import Footer from './components/Footer';
import Whytorvex from './components/whytorvex';
import SolveProblem from './components/SolveProblem';
import Rating from './components/Rating';


function App() {

  return (
    <div>
      <Hero />
      <TrovesAISection />
      <Whytorvex />
      <SolveProblem />
      <Rating />
      <Footer />
    </div>
  );
};

export default App
