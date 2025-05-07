import React from 'react';
import { motion } from 'framer-motion';

const Whytorvex = () => {
  return (
    <motion.div
      className="flex flex-col gap-8 relative m-2 sm:m-4 px-4 sm:px-8 md:px-12 py-7 h-auto w-auto bg-[#2f1043] rounded-3xl font-sans"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background gradient layers */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_90%_150px,#715481,transparent)] opacity-70 rounded-3xl"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_10%_750px,#715481,transparent)] opacity-70 rounded-3xl"></div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center gap-8 md:gap-15 py-10 md:py-30 z-10">
        <div className="mt-2 inline-block bg-gradient-to-tr bg-purple-300 text-purple-700 px-3 py-1 rounded-full flex items-center space-x-2 text-sm text-gray-800">
          Why Trovex AI?
        </div>

        <div className='flex flex-col gap-6 md:gap-10 w-full md:w-[1000px] text-white text-xl sm:text-2xl md:text-4xl px-2 md:px-4 font-normal font-sans'>
          <p>The current sales training is outdated and ineffective</p>
          <p>Reps lose confidence, deals, and direction without clear feedback.</p>
          <p className='text-gray-400'>We deliver smart, personalized training that builds skills and drives results.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Whytorvex;
