import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import TrovesAISection from "./components/TrovesAISection";
import Footer from "./components/Footer";
import Whytorvex from "./components/whytorvex";
import SolveProblem from "./components/SolveProblem";
import Rating from "./components/Rating";
import FAQ from "./components/faqData";
import { motion } from "framer-motion";
import FeaturesSection from "./components/FeaturesSection";

function App() {
  return (
    <div>
      <Hero />
      <TrovesAISection />
      <Whytorvex />
      <SolveProblem />
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Everything you need to
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
          Upskill your Sales Force
        </h2>
        <p className="text-gray-700 mb-8">
          Transform your sales reps into rockstars
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-b from-purple-600 to-pink-500 text-white border border-transparent hover:bg-white hover:bg-none hover:text-purple-600 hover:border-purple-600 transition-all duration-500 ease-in-out px-6 py-3 rounded-lg font-semibold shadow-md"
        >
          Book a Demo
        </motion.button>
      </div>
      <Rating />
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Everything you need to
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
          Upskill your Sales Force
        </h2>
        <p className="text-gray-700 mb-8">
          Transform your sales reps into rockstars
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-b from-purple-600 to-pink-500 text-white border border-transparent hover:bg-white hover:bg-none hover:text-purple-600 hover:border-purple-600 transition-all duration-500 ease-in-out px-6 py-3 rounded-lg font-semibold shadow-md"
        >
          Book a Demo
        </motion.button>
      </div>
      <FeaturesSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
