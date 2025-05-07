import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';
import TrovesAISection from './components/TrovesAISection';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Hero />
      <TrovesAISection />
      <Footer />
    </div>
  );
};

export default App
