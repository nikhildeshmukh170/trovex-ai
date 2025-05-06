import React from "react";
import Header from "./Header";
import Avatar from "../assets/menicon.png";
import design from "../assets/herosectiondesign.png";
import reviews from "../assets/reviews.png"

const Hero = () => {
  return (
    // <div className="m-4 w-auto h-scree rounded-2xl">
    <div class="flex flex-col gap-30 relative m-4 px-30 py-7 h-screen w-auto bg-white rounded-3xl font-sans">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_1300px_at_50%_350px,#8254F3,transparent)] opacity-20 rounded-3xl"></div>
      {/* <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(199,63,162,.15),rgba(130,84,243,0))]"></div>
      <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(130,84,243,.15),rgba(199,63,162,0))]"></div> */}
      <div class="absolute bottom-0 left-0 right-0 top-10 bg-[radial-gradient(circle_400px_at_70%_380px,#8254F3,transparent)] opacity-40"></div>
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_200px_at_75%_550px,#C73FA2,transparent)] opacity-70"></div>
      <div class="absolute bottom-0 left-0 right-0 top-10 bg-[radial-gradient(circle_200px_at_5%_680px,#8254F3,transparent)] opacity-30"></div>
      {/* header */}
      <div className="header z-10">
        <Header />
      </div>
      {/* main content */}
      {/* <div className="flex flex-row"> */}
      <div className="flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
        <div className="mt-2 inline-block border-2 border-purple-400 p-[2px] rounded-full">
    <div className="bg-gradient-to-tr from-purple-300 to-transparent text-purple-700 px-3 py-1 rounded-full flex items-center space-x-2 text-xs text-gray-800">
        <img src={reviews} alt="" className="w-3" />
      <span>4.8 stars, 50+ reviews</span>
    </div>
  </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans">
            Sales Excellence Starts <br /> With{" "}
            <span className="bg-gradient-to-b from-purple-600 via-pink-400 to-pink-500 bg-clip-text text-transparent">
              Better Practice
            </span>
          </h1>
          <p className="text-gray-600">
            Trovex listens to every sales call, identifies what top reps do
            differently, and builds AI-powered simulations that help your entire
            team practice, improve, and win—at scale.
          </p>
          <button className="bg-gradient-to-b from-purple-600 to-pink-500 text-white border border-transparent hover:bg-white hover:bg-none hover:text-purple-600 hover:border-purple-600 transition-all duration-500 ease-in-out px-6 py-3 rounded-lg font-semibold shadow-md">
            Book a Demo
          </button>
        </div>

        {/* Right Chat UI */}
        <div className="relative mt-12 md:mt-0 md:ml-16 w-full max-w-sm">
          <div className="absolute -left-15 -top-20 p-[2px] rounded-3xl bg-gradient-to-b from-purple-500 to-pink-500 w-72 shadow-lg">
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
          </div>
        </div>
        {/* </div> */}
      </div>
      //{" "}
    </div>
  );
};

export default Hero;
