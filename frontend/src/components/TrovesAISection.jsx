import React, { useState, useEffect, useRef } from "react";
import TrovesAISteps from "./TrovesAISteps";
import aisectionbg from "../assets/aisectioncardbg.png";
import aisectioncard from "../assets/aisectioncards.png";
import { motion } from "framer-motion";

const AnimatedNumber = ({ value, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const end = parseInt(value);
          const incrementTime = Math.abs(Math.floor(duration / end));
          let timer;

          // Handle different formats (percentage vs multiplier)
          if (suffix === "x") {
            // For multipliers (e.g. 5x), animate from 0 to the value directly
            timer = setInterval(() => {
              start += 1;
              setCount(start);
              if (start >= end) {
                clearInterval(timer);
              }
            }, 50);
          } else {
            // For percentages, animate with proper increments
            timer = setInterval(() => {
              start += 1;
              setCount(start);
              if (start >= end) {
                clearInterval(timer);
              }
            }, incrementTime);
          }

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [value, duration, hasAnimated, suffix]);

  return (
    <p
      ref={countRef}
      className="text-5xl font-bold bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent"
    >
      {count}
      {suffix}
    </p>
  );
};

const TrovesAISection = () => {
  return (
    <div className="flex flex-col items-center text-center py-12 bg-white gap-10">
      {/* Main heading */}
      <motion.h2
        className="text-6xl font-bold text-black w-full max-w-[1000px] px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold">
          Supercharge<span className="text-black"> your sales </span> training{" "}
          <span className="text-black"> with </span>AI
          <span className="text-black"> That Truly Delivers</span>
        </p>
      </motion.h2>

      {/* Trovex Advantage Section */}
      <div className="w-full py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Left text column */}
            <div className="max-w-md text-left">
              <h2 className="text-3xl font-bold bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
                The Trovex Advantage
              </h2>
              <p className="text-gray-700">
                Trained on over{" "}
                <span className="font-bold">1.8 million hours</span> of B2B
                sales calls and{" "}
                <span className="font-bold">150,000+ roleplays</span>, Trovex AI
                empowers your team to close deals faster with hyper-realistic
                roleplays.
              </p>
            </div>

            {/* Right metrics columns */}
            <div className="flex flex-row flex-wrap gap-10 md:gap-16 mt-4 md:mt-0">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedNumber value="45" suffix="%" />
                <p className="text-gray-600 mt-2">
                  Faster speed to proficiency
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedNumber value="21" suffix="%" />
                <p className="text-gray-600 mt-2">Improvement in win rates</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedNumber value="5" suffix="x" />
                <p className="text-gray-600 mt-2">More practice</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* <TrovexAISteps /> */}
        <img src={aisectionbg} alt="" className="relative z-0" />
        <img src={aisectioncard} alt="" className="absolute top-350 left-60" />
      </motion.div>
    </div>
  );
};

export default TrovesAISection;
