import React from 'react';
import TrovesAISteps from './TrovesAISteps';

const TrovesAISection = () => {
  return (
    <div className="flex flex-col items-center text-center py-12 bg-white">
      {/* Main heading */}
      <h2 className="text-4xl font-bold text-black">
        <span className="text-purple-500">Supercharge</span> your sales <span className="text-purple-500">training</span> with <span className="text-purple-500">AI</span> That Truly Delivers
      </h2>
      
      {/* Subheading and description */}
      <div className="mt-8 max-w-4xl px-4">
        <h3 className="text-2xl font-semibold text-purple-500">The Trovex Advantage</h3>
        <p className="text-gray-700 mt-2">
          Trained on over <span className="font-bold">1.8 million hours</span> of B2B sales calls and <span className="font-bold">150,000+ roleplays</span>, Trovex AI empowers your team to close deals faster with hyper-realistic roleplays.
        </p>
        
        {/* Metrics section */}
        <div className="flex flex-wrap justify-center gap-12 mt-6">
          <div className="text-center w-36 sm:w-48">
            <p className="text-4xl font-bold text-purple-500">45%</p>
            <p className="text-gray-600">Faster speed to proficiency</p>
          </div>
          <div className="text-center w-36 sm:w-48">
            <p className="text-4xl font-bold text-purple-500">21%</p>
            <p className="text-gray-600">Improvement in win rates</p>
          </div>
          <div className="text-center w-36 sm:w-48">
            <p className="text-4xl font-bold text-purple-500">5x</p>
            <p className="text-gray-600">More practice</p>
          </div>
        </div>
      </div>
      <div>
        <TrovesAISteps />
      </div>
    </div>
  );
};

export default TrovesAISection;
