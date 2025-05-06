import React from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white rounded-2xl z-10">
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" />
      </div>

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

      <div className="space-x-4">
        <button className="bg-gradient-to-b from-purple-600 to-pink-500 text-white border border-transparent hover:bg-white hover:bg-none hover:text-purple-600 hover:border-purple-600 transition-all duration-500 ease-in-out px-6 py-3 rounded-lg font-semibold shadow-md">
          Book a Demo
        </button>
        <button className="hidden md:inline text-purple-700 font-semibold border border-purple-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-[0px]">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Header;
