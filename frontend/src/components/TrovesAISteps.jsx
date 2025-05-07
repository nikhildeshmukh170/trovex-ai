import React from 'react';

const TrovexAISteps = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Column - Reduce Your Ramp Time */}
          <div className="flex flex-col">
            <div className="bg-purple-50 rounded-3xl p-6 mb-6 relative">
              {/* Chat bubble with profile pic */}
              <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-purple-700">Neel Gupta</p>
                    <p className="text-sm mt-1">I'd love to tell you about how Trovex can 10x your sales teams.</p>
                  </div>
                  <img 
                    src="https://randomuser.me/api/portraits/men/36.jpg" 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="flex items-center text-xs text-red-500 mt-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                  <span>LIVE • Recording...</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute -right-12 top-1/2 hidden md:block">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35 0L43.5 8.5L27.5 24.5L70 24.5L70 35L27.5 35L43.5 51L35 59.5L0 24.5L35 0Z" fill="#E9D5FF" fillOpacity="0.6"/>
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-purple-600 mb-2">Reduce Your Ramp Time</h3>
            <p className="text-gray-700 mb-4">
              Let your sales rep hit the floor 2x faster with hyper-realistic roleplay.
            </p>
          </div>

          {/* Middle Column - Evaluate Real Calls */}
          <div className="flex flex-col">
            <div className="bg-purple-50 rounded-3xl p-6 mb-6 relative">
              {/* Evaluation card */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-purple-600 mr-2">A</span>
                    <span className="text-purple-600 text-2xl font-bold">+</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">85% Talking Points Hit</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </div>
                    <span className="text-sm">Objective Handling</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                      </svg>
                    </div>
                    <span className="text-sm">Open-Ended Questions</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-purple-600 mb-2">Evaluate Real Calls</h3>
            <p className="text-gray-700 mb-4">
              Get AI-driven scores instantly and provide personalised feedback.
            </p>
          </div>

          {/* Right Column - Integration with Call Systems */}
          <div className="flex flex-col">
            <div className="bg-purple-50 rounded-3xl p-6 mb-6">
              <div className="text-lg font-medium mb-3 text-center">
                Trovex's Call Recorder listens to every calls your reps take
              </div>
              <div className="flex justify-center space-x-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Google_meet_icon_%282020%29.svg/512px-Google_meet_icon_%282020%29.svg.png" alt="Google Meet" className="w-10 h-10" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Zoom_Communications_logo.svg/512px-Zoom_Communications_logo.svg.png" alt="Zoom" className="w-10 h-10" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/512px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" alt="Microsoft Teams" className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Central text */}
        <div className="text-center mt-8 mb-12">
          <p className="text-gray-800 font-medium">
            Hire or Train the best sales rep with our scalable assessment.
          </p>
          <div className="flex justify-center mt-4">
            <div className="flex -space-x-2">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/52.jpg" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bottom Left - Encourage Mastery */}
          <div className="flex flex-col">
            <div className="bg-purple-50 rounded-3xl p-6 mb-6">
              {/* Performance tracking UI */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="border-b pb-3 mb-3">
                  <div className="flex items-center">
                    <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                    <div>
                      <p className="text-sm font-medium">Tony Marshall</p>
                      <p className="text-xs text-gray-500">Sales Manager @ Widgets</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {/* Performance metrics rows */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Active Listen</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-xs ml-2">6.5/10</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Discovery</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                      <span className="text-xs ml-2">8/10</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Objection</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <span className="text-xs ml-2">4/10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-purple-600 mb-2">Encourage Mastery</h3>
            <p className="text-gray-700 mb-4">
              Assign role-plays anytime for your reps to practice on their terms.
            </p>
          </div>

          {/* Bottom Right - Plug Skill Gaps */}
          <div className="flex flex-col">
            <div className="bg-purple-50 rounded-3xl p-6 mb-6">
              {/* Spider/Radar chart visualization */}
              <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-center">
                <div className="w-48 h-48 relative">
                  {/* Simple radar chart simulation */}
                  <div className="w-full h-full rounded-full border border-gray-200 absolute"></div>
                  <div className="w-3/4 h-3/4 rounded-full border border-gray-200 absolute" style={{ top: '12.5%', left: '12.5%' }}></div>
                  <div className="w-1/2 h-1/2 rounded-full border border-gray-200 absolute" style={{ top: '25%', left: '25%' }}></div>
                  <div className="w-1/4 h-1/4 rounded-full border border-gray-200 absolute" style={{ top: '37.5%', left: '37.5%' }}></div>
                  
                  {/* Chart labels */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-xs">Discovery</span>
                  </div>
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <span className="text-xs">Clarity</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <span className="text-xs">Control</span>
                  </div>
                  <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-xs">Communication</span>
                  </div>
                  
                  {/* Polygon for data representation */}
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon 
                        points="50,10 90,50 50,90 10,50" 
                        fill="rgba(168, 85, 247, 0.2)" 
                        stroke="#A855F7" 
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-purple-600 mb-2">Plug Skill Gaps</h3>
            <p className="text-gray-700 mb-4">
              Spot knowledge gaps and get personalized training recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrovexAISteps;