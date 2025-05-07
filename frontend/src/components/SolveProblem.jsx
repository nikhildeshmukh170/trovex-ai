import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import womenimg from "../assets/women.png";
import { motion } from "framer-motion";

const SolveProblem = () => {
  const [persona, setPersona] = useState("Skeptical, Rude");

  const [createScenarioRef, createScenarioInView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [powerUpRef, powerUpInView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [reviewRef, reviewInView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col justify-around lg:flex-row items-start gap-10">
        {/* Left column - Text content */}
        <motion.div
          className="w-full lg:w-[800px] sticky top-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl w-full lg:w-[500px] font-bold bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
            How Trovex Solves These Problems
          </h2>
          <p className="text-lg font-medium text-gray-800 mb-8 w-full lg:w-[400px]">
            Learn how our platform helps you power up your sales team.
          </p>
          <button className="bg-gradient-to-b from-purple-600 to-pink-500 text-white border border-transparent hover:bg-white hover:bg-none hover:text-purple-600 hover:border-purple-600 transition-all duration-500 ease-in-out px-6 py-3 rounded-lg font-semibold shadow-md">
            Book a Demo
          </button>
        </motion.div>

        {/* Right column - Cards */}
        <div className="flex flex-col gap-10 w-full lg:w-auto top-10">
          {/* Create a scenario card */}
          <div
            ref={createScenarioRef}
            className={`bg-purple-50 rounded-4xl p-10 w-full max-w-xl border border-gray-300 transition-all duration-700 ease-in-out ${
              createScenarioInView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            } sticky top-0`}
          >
            <div className="flex flex-col gap-5 justify-center bg-white p-8 rounded-3xl">
              {/* Topic input */}
              <div className="bg-purple-100 p-6 rounded-3xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="4" fill="currentColor" />
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold">
                    Topic
                  </span>
                </div>
                <div className="w-full rounded-xl border border-purple-100 p-2">
                  Why should we buy your product?
                </div>
              </div>

              {/* Conversation partner */}
              <div className="bg-purple-100 p-6 rounded-3xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M23 21V19C22.9986 17.1771 21.7079 15.5857 20 15.13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 3.13C17.7105 3.58399 19.0031 5.17624 19.0031 7.00024C19.0031 8.82424 17.7105 10.4165 16 10.87"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold">
                    Conversation Partner
                  </span>
                </div>
                <div className="w-full rounded-xl border border-purple-100 flex justify-between items-center p-2">
                  <span className="text-gray-800">Search Client</span>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Persona dropdown */}
              <div className="bg-purple-100 p-6 rounded-3xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold">
                    Persona
                  </span>
                </div>
                <div className="w-full rounded-xl border border-purple-100 flex justify-between items-center p-2">
                  <span className="text-gray-800">{persona}</span>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Create a scenario heading and description */}
            <div>
              <h3 className="text-2xl bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold my-3">
                Create a scenario
              </h3>
              <p className="text-gray-900">
                Craft hyper-realistic scenarios that mirror your most
                challenging customer interactions.
              </p>
            </div>
          </div>

          {/* Power Up the Simulator */}
          <div
            ref={powerUpRef}
            className={`bg-purple-50 rounded-4xl p-10 w-full max-w-xl border border-gray-300 transition-all duration-700 ease-in-out ${
              powerUpInView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            } sticky top-0`}
            style={{ top: "100px" }}
          >
            <div className="flex flex-col gap-5 justify-center bg-white p-8 rounded-3xl">
              {/* Chat interface */}
              <div className="flex flex-col gap-4">
                {/* Trovex AI message */}
                <div className="bg-purple-50 p-4 rounded-3xl max-w-md">
                  <div className="mb-2 bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold">
                    Trovex AI
                  </div>
                  <div className="text-gray-800">
                    So how does your pricing works?
                    <br />
                    Any extra costs I should be aware of?
                  </div>
                </div>

                {/* User message with audio visualization */}
                <div className="flex justify-end">
                  <div className="bg-purple-100 p-4 rounded-3xl max-w-md">
                    <div className="flex items-center justify-between mb-2 gap-4">
                      <div className="bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold">
                        Prachi Sharma
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <div className="w-8 h-8 bg-purple-500">
                          <img src={womenimg} alt="" />
                        </div>
                      </div>
                    </div>

                    {/* Audio wave visualization */}
                    <div className="flex items-center justify-center gap-1 h-10">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 rounded-full bg-purple-400"
                          style={{
                            height: `${15 + Math.random() * 20}px`,
                            opacity: Math.random() > 0.3 ? 1 : 0.5,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timer and next question */}
                <div className="flex justify-center mt-2">
                  <div className="flex items-center gap-2 border border-purple-200 px-4 py-2 rounded-full">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500"></div>
                      <span className="font-bold">0:24</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span>Next Question</span>
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18l6-6-6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card heading and description */}
            <div>
              <h3 className="text-2xl bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold my-3">
                Power Up the Simulator
              </h3>
              <p className="text-gray-900">
                Assign role-plays anytime for your reps to practice on their
                terms.
              </p>
            </div>
          </div>

          {/* Review the Results */}
          <div
            ref={reviewRef}
            className={`bg-purple-50 rounded-4xl p-10 w-full max-w-xl border border-gray-300 transition-all duration-700 ease-in-out ${
              reviewInView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            } sticky top-0`}
            style={{ top: "200px" }}
          >
            <div className="flex flex-col gap-5 justify-center bg-white p-8 rounded-3xl relative overflow-hidden">
              {/* Achievement metrics */}
              <div className="flex flex-col gap-4">
                {/* 85% Talking Points Hit */}
                <div className="bg-purple-50 px-4 py-3 rounded-xl border border-purple-300 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-emerald-700">
                    85% Talking Points Hit
                  </span>
                </div>

                {/* Objective Handling */}
                <div className="bg-purple-50 px-4 py-3 rounded-xl border border-purple-300 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-emerald-700">
                    Objective Handling
                  </span>
                </div>

                {/* Open-Ended Questions */}
                <div className="bg-purple-50 px-4 py-3 rounded-xl border border-purple-300 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 15l-6-6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-red-500">
                    Open-Ended Questions
                  </span>
                </div>
              </div>

              {/* Woman image */}
              <div className="absolute top-0 right-0 h-full">
                <div className="h-full w-48 bg-purple-100 opacity-90 rounded-l-full">
                  <img src={womenimg} alt="" />
                </div>
              </div>
            </div>

            {/* Card heading and description */}
            <div>
              <h3 className="text-2xl bg-gradient-to-b from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold my-3">
                Review the Results
              </h3>
              <p className="text-gray-900">
                Spot every gap—knowledge, tone, word choice, sentiment, and
                method—in one clear click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolveProblem;
