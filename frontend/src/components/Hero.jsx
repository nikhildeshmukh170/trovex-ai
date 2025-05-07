import React from "react";
import Header from "./Header";
import Avatar from "../assets/menicon.png";
import design from "../assets/herosectiondesign.png";
import reviews from "../assets/reviews.png";
import { motion } from "framer-motion";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
// import logo8 from "../assets/logo8.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const Hero = () => {
  return (
    // <div className="m-4 w-auto h-scree rounded-2xl">
    <div class="flex flex-col gap-30 relative m-4 px-30 py-7 h-auto w-auto bg-white rounded-3xl font-sans">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_1300px_at_50%_350px,#8254F3,transparent)] opacity-20 rounded-3xl"></div>
      {/* <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(199,63,162,.15),rgba(130,84,243,0))]"></div>
      <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(130,84,243,.15),rgba(199,63,162,0))]"></div> */}
      <div class="absolute bottom-0 left-0 right-0 top-10 bg-[radial-gradient(circle_400px_at_70%_380px,#8254F3,transparent)] opacity-40"></div>
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_200px_at_80%_550px,#C73FA2,transparent)] opacity-70"></div>
      <div class="absolute bottom-0 left-0 right-0 top-10 bg-[radial-gradient(circle_200px_at_5%_680px,#8254F3,transparent)] opacity-30 rounded-3xl"></div>
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_100px_at_95%_100px,#8254F3,transparent)] opacity-30"></div>
      {/* header */}
      <div className="header z-10">
        <Header />
      </div>
      {/* main content */}
      {/* <div className="flex flex-row"> */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between z-10"
      >
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          <div className="mt-2 inline-block border-2 border-purple-400 p-[2px] rounded-full">
            <div className="bg-gradient-to-tr from-purple-300 to-transparent text-purple-700 px-3 py-1 rounded-full flex items-center space-x-2 text-xs text-gray-800">
              <img src={reviews} alt="" className="w-3" />
              <span>4.8 stars, 50+ reviews</span>
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 font-sans"
          >
            Sales Excellence Starts <br /> With{" "}
            <span className="bg-gradient-to-b from-purple-600 via-pink-400 to-pink-500 bg-clip-text text-transparent">
              Better Practice
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-600"
          >
            Trovex listens to every sales call, identifies what top reps do
            differently...
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-b from-purple-600 to-pink-500 text-white border border-transparent hover:bg-white hover:bg-none hover:text-purple-600 hover:border-purple-600 transition-all duration-500 ease-in-out px-6 py-3 rounded-lg font-semibold shadow-md"
          >
            Book a Demo
          </motion.button>
        </div>

        {/* Right Chat UI */}
        <div className="relative mt-12 md:mt-0 md:ml-16 w-full max-w-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -left-15 -top-20 p-[2px] rounded-3xl bg-gradient-to-b from-purple-500 to-pink-500 w-72 shadow-lg"
          >
            <div className="bg-white rounded-3xl p-4">
              <p className="text-md text-gray-700">
                <span className="text-lg md:text-md font-bold bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Trovex AI
                </span>

                <br />
                <p className="font-normal text-black">
                  Hey there! Tell me more about what you're selling...
                </p>
              </p>
            </div>
            <div className="absolute -left-10 z-12">
              <img src={design} alt="" />
            </div>
            <div className="absolute left-20 top-38 p-[2px] rounded-3xl bg-gradient-to-b from-purple-500 to-pink-500 w-72 shadow-lg">
              <div className="bg-white p-4 rounded-3xl flex items-start space-x-2">
                <img
                  src={Avatar}
                  alt="Avatar"
                  className=" absolute w-16 h-16 rounded-full ml-60 -mt-10"
                />
                <div>
                  <p className="text-lg md:text-md font-bold bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Neel Gupta
                  </p>
                  <p className="font-normal text-gray-900">
                    I’d love to tell you about how Trovex AI can 10x your sales
                    teams.
                  </p>
                  {/* <div className="mt-2 text-xs text-orange-500 font-sans">
                    🟠 Call • Practicing
                  </div> */}
                </div>
              </div>
              <div className="absolute mt-2 text-xs bg-gradient-to-b from-purple-500 to-pink-500 shadow-md p-[2px] rounded-full left-33 ">
                <div className="bg-white px-3 py-1 rounded-full flex items-center space-x-2 text-gray-800 ">
                  <span>🟠 Call </span>
                  <div className="h-[10px] border border-gray-300"></div>{" "}
                  <span>Recording...</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* </div> */}
      </motion.div>
      {/* //{" bottom content "} */}
      <div className="flex flex-col justify-center items-center z-11 gap-5">
        <div className="flex flex-row justify-center items-center gap-2">
          <p className="text-center">
            Over&nbsp;
            <span className="inline-block px-2 py-1 rounded-lg bg-white shadow-md">
              <span className="bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold">
                100+ companies
              </span>
            </span>
            &nbsp;prefer&nbsp;
            <span className="bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold">
              Trovex AI
            </span>
            &nbsp;to train their sales and customer support teams.
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-4 bg-transparent">
          {/* Left Transparent Fade */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-purple/10 to-transparent z-10" />

          {/* Right Transparent Fade */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-transparent via-purple/10 to-transparent z-10" />

          {/* Scrolling Logos */}
          <div className="flex gap-8 w-max animate-scroll whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="h-12 transition duration-300 hover:brightness-75 opacity-40 hover:opacity-80"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
