import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-30 relative m-4 px-30 py-7 h-auto w-auto bg-[#2f1043] rounded-3xl font-sans">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_50%_350px,#715481,transparent)] opacity-70 rounded-3xl"></div>
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
      <div></div>
    </div>
  );
};

export default Footer;
