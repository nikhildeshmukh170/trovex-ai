import React from "react";
import footerlogo from "../assets/FooterLogo.png";
import rank from "../assets/FooterrankLogo.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-30 relative m-4 px-30 py-7 h-auto w-auto bg-[#2f1043] rounded-3xl font-sans">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_90%_250px,#715481,transparent)] opacity-70 rounded-3xl"></div>
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_10%_850px,#715481,transparent)] opacity-70 rounded-3xl"></div>
      {/* footer upper section */}
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="mt-2 inline-block  bg-gradient-to-tr bg-purple-300 text-purple-700 px-3 py-1 rounded-full flex items-center space-x-2 text-xs text-gray-800">
          Join the AI Revolution
        </div>
        <div className="text-6xl text-white items-center justify-center font-bold font-sans w-[800px] text-center">
          Ready To Revolutionise Your Sales Team’s Performance?
        </div>
        <button className="bg-gradient-to-b from-purple-600 to-pink-600 text-white border border-transparent hover:bg-white hover:bg-none hover:text-purple-600 hover:border-purple-600 transition-all duration-500 ease-in-out px-6 py-3 rounded-lg font-semibold shadow-md z-11">
          Talk to Sales
        </button>
      </div>

      {/* footer main section */}
      <div className="text-white py-10 z-12">
        <hr className="border-t-1 border-pink-300 my-4" />
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-start">
          {/* Left side - Logo and badges */}
          <div className="mb-8 md:mb-0">
            {/* Logo */}
            <div className="flex flex-col items-start mb-5 gap-4">
              <img src={footerlogo} alt="" className="w-64" />
              <img src={rank} alt="" className="w-30" />
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn">
                <svg
                  className="w-5 h-5 text-white hover:text-purple-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg
                  className="w-5 h-5 text-white hover:text-purple-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg
                  className="w-5 h-5 text-white hover:text-purple-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Navigation menus */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Company column */}
            <div>
              <h3 className="text-xl font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Book a Demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Product column */}
            <div>
              <h3 className="text-xl font-medium mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    AI Coaching
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    AI Sales Role play
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    AI Real Call Scoring
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    AI Post-Sales Roleplays
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources column */}
            <div>
              <h3 className="text-xl font-medium mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom part */}
      <div className="text-white -mt-[150px] relative ">
        {/* Large Trovex background text */}
        <div className="realtive inset-0 flex items-center justify-center overflow-hidden z-0">
          <span className="text-[300px] font-bold text-purple-300 opacity-30 tracking-tighter font-sans">
            Trovex
          </span>
        </div>

        {/* Horizontal line above copyright info */}
        <div className="container mx-auto px-4 -mt-[118px]">
          <hr className="border-t-1 border-pink-300 opacity-60 my-4" />

          {/* Copyright section */}
          <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
            <div className="mb-4 md:mb-0 text-gray-400">
              © 2025 Cloudsprint Technologies Private Limited. All rights
              reserved.
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Designed by</span>
              <a href="#" className="text-white hover:underline">
                24Seven.Design
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
