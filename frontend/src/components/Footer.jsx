import React from "react";
import { motion } from "framer-motion";
import footerlogo from "../assets/FooterLogo.png";
import rank from "../assets/FooterrankLogo.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-8 md:gap-30 relative m-2 md:m-4 px-4 sm:px-6 md:px-30 py-7 h-auto w-auto bg-[#2f1043] rounded-3xl font-sans overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_90%_250px,#715481,transparent)] opacity-70 rounded-3xl"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_10%_850px,#715481,transparent)] opacity-70 rounded-3xl"></div>

      {/* footer upper section */}
      <motion.div variants={fadeInUp} className="flex flex-col justify-center items-center gap-6 md:gap-10 z-10">
        <div className="mt-2 inline-block bg-gradient-to-tr bg-purple-300 text-purple-700 px-3 py-1 rounded-full flex items-center space-x-2 text-xs text-gray-800">
          Join the AI Revolution
        </div>
        <div className="text-3xl sm:text-4xl md:text-6xl text-white items-center justify-center font-bold font-sans w-full md:w-[900px] text-center px-2">
          Ready To Revolutionise Your Sales Team's Performance?
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-b from-purple-600 to-pink-600 text-white border border-transparent hover:bg-white hover:bg-none hover:text-purple-600 hover:border-purple-600 transition-all duration-500 ease-in-out px-6 py-3 rounded-lg font-semibold shadow-md z-10"
        >
          Talk to Sales
        </motion.button>
      </motion.div>

      {/* footer main section */}
      <motion.div variants={fadeInUp} className="text-white py-6 md:py-10 z-10">
        <hr className="border-t-1 border-pink-300 my-4" />
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0 w-full md:w-auto">
            <div className="flex flex-col items-start mb-5 gap-4">
              <img src={footerlogo} alt="footer logo" className="w-full max-w-[200px] md:w-64" />
              <img src={rank} alt="rank logo" className="w-28 md:w-30" />
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              {["LinkedIn", "Twitter", "Facebook"].map((label, i) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  aria-label={label}
                  className="text-white hover:text-purple-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {/* Icon paths (same as your original) */}
                    {label === "LinkedIn" && (
                      <path d="M19 0h-14c-2.761 0-5...z" />
                    )}
                    {label === "Twitter" && (
                      <path d="M24 4.557c-.883.392...z" />
                    )}
                    {label === "Facebook" && (
                      <path d="M22.675 0h-21.35c-...z" />
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Menus */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-10 w-full md:w-auto mt-6 md:mt-0">
            {[
              {
                title: "Company",
                links: ["About Us", "Pricing", "Book a Demo"],
              },
              {
                title: "Product",
                links: ["AI Coaching", "AI Sales Role play", "AI Real Call Scoring", "AI Post-Sales Roleplays"],
              },
              {
                title: "Resources",
                links: ["Blog", "Success Stories"],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">{section.title}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-300 hover:text-white text-sm md:text-base">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer background title and copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white -mt-16 sm:-mt-24 md:-mt-[150px] relative"
      >
        <div className="relative inset-0 flex items-center justify-center overflow-hidden z-0">
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1 }}
            className="text-[100px] sm:text-[200px] md:text-[300px] font-bold text-purple-300 opacity-30 tracking-tighter font-sans"
          >
            Trovex
          </motion.span>
        </div>

        <div className="container mx-auto px-4 -mt-8 sm:-mt-16 md:-mt-[118px]">
          <hr className="border-t-1 border-pink-300 opacity-60 my-4" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 py-4">
            <div className="text-center md:text-left text-xs sm:text-sm text-gray-400">
              © 2025 Cloudsprint Technologies Private Limited. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm">
              <span className="text-gray-400">Designed by</span>
              <a href="#" className="text-white hover:underline">
                24Seven.Design
              </a>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
