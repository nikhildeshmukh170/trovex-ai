import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-6 py-4 bg-white rounded-2xl z-10 relative">
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="w-auto h-8 md:h-auto" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        {/* Product Dropdown */}
        <li className="relative group">
          <div className="flex items-center gap-1 hover:text-purple-600 cursor-pointer">
            <a href="#">Product</a>
            <svg
              className="w-4 h-4 transform transition-transform duration-200 group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <ul className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Integrations
              </a>
            </li>
          </ul>
        </li>

        {/* About */}
        <li>
          <a href="#" className="hover:text-purple-600">
            About
          </a>
        </li>

        {/* Pricing */}
        <li>
          <a href="#" className="hover:text-purple-600">
            Pricing
          </a>
        </li>

        {/* Resources Dropdown */}
        <li className="relative group">
          <div className="flex items-center gap-1 hover:text-purple-600 cursor-pointer">
            <a href="#">Resources</a>
            <svg
              className="w-4 h-4 transform transition-transform duration-200 group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <ul className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Support
              </a>
            </li>
          </ul>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-gradient-to-b from-purple-600 to-pink-500 text-white border border-transparent hover:bg-white hover:bg-none hover:text-purple-600 hover:border-purple-600 transition-all duration-500 ease-in-out px-6 py-3 rounded-lg font-semibold shadow-md">
          Book a Demo
        </button>
        <button className="text-purple-700 font-semibold border border-purple-600 px-6 py-3 rounded-lg shadow-lg hover:shadow-none">
          Log in
        </button>
      </div>

      {/* Mobile Button */}
      <div className="md:hidden flex items-center space-x-2">
        <button className="text-xs bg-gradient-to-b from-purple-600 to-pink-500 text-white border border-transparent py-2 px-4 rounded-lg font-semibold shadow-md">
          Demo
        </button>
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl mt-1 py-4 md:hidden z-20">
          <ul className="flex flex-col space-y-4 px-6">
            <li>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <a href="#" className="text-gray-700 font-medium">Product</a>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <ul className="pl-4 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600">Overview</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600">Features</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600">Integrations</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" className="text-gray-700 font-medium">About</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 font-medium">Pricing</a>
            </li>
            <li>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <a href="#" className="text-gray-700 font-medium">Resources</a>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <ul className="pl-4 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600">Blog</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600">Docs</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600">Support</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button className="w-full text-center text-purple-700 font-semibold border border-purple-600 px-6 py-3 rounded-lg shadow-lg">
                Log in
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;