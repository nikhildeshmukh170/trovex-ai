import React from "react";
import golbal from "../assets/global.png";
import encryption from "../assets/encryption.png";
import ratinglogo3 from "../assets/ratinglogo3.png";
import rating from "../assets/FooterrankLogo.png";

const Rating = () => {
  return (
    <div className="flex justify-center items-center w-full py-16">
      <div className="flex flex-col gap-8 relative m-4 px-12 py-7 max-w-[1100px] w-full justify-center items-center align-middle bg-[#2f1043] rounded-3xl font-sans text-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_200px_at_80%_100px,#ffb2a752,transparent)] opacity-70 rounded-3xl"></div>
        <div className="max-w-7xl mx-auto w-full">
          {/* Top section with heading, description and rating */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            {/* Left side - Heading and description */}
            <div className="max-w-md mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">
                Engineered for Large Corporations
              </h2>
              <p className="text-gray-300">
                Trovex AI is meets elite benchmarks set by verified third-party leaders.
              </p>
            </div>

            {/* Right side - Rating with laurel wreath */}
            <div className="flex items-center p-10">
              <div className="relative flex flex-col items-center">
                {/* Left laurel */}
                <svg className="absolute left-0 h-16 text-gray-300" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6C10 8 9 11 9 15C7 13 6 11 6 9C8 7 10 6 12 6Z" stroke="currentColor" strokeWidth="1" />
                  <path d="M12 8C10 10 9 12 9 16C7 14 6 12 6 10C8 8 10 8 12 8Z" stroke="currentColor" strokeWidth="1" />
                  <path d="M12 10C10 12 9 13 9 17C7 15 6 13 6 11C8 9 10 10 12 10Z" stroke="currentColor" strokeWidth="1" />
                </svg>
                
                {/* Rating */}
                <div className="flex flex-col items-center mx-10">
                  <p className="text-5xl font-bold text-orange-500">4.9</p>
                  <div className="flex my-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm">4.9 out of 5</span>
                    <div className="flex items-center ml-2">
                      <span className="text-orange-500 font-bold text-sm mr-1">G2</span>
                      <span className="text-sm">Rating</span>
                    </div>
                  </div>
                </div>
                
                {/* Right laurel */}
                <svg className="absolute right-0 h-16 text-gray-300" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6C14 8 15 11 15 15C17 13 18 11 18 9C16 7 14 6 12 6Z" stroke="currentColor" strokeWidth="1" />
                  <path d="M12 8C14 10 15 12 15 16C17 14 18 12 18 10C16 8 14 8 12 8Z" stroke="currentColor" strokeWidth="1" />
                  <path d="M12 10C14 12 15 13 15 17C17 15 18 13 18 11C16 9 14 10 12 10Z" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 - Strong Encryption */}
            <div>
              <div className="mb-4">
                {/* <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                  <line x1="9" y1="9" x2="9" y2="15" strokeWidth="2" />
                  <line x1="15" y1="9" x2="15" y2="15" strokeWidth="2" />
                  <line x1="9" y1="9" x2="15" y2="9" strokeWidth="2" />
                  <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2" />
                </svg> */}
                <img src={encryption} alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Strong Encryption, Enterprise SSO & SIEM</h3>
              <p className="text-gray-300 text-sm">
                Trovex AI supports AES 256 Bit Encryption Out of the box.
              </p>
            </div>

            {/* Feature 2 - SOC 2 */}
            <div>
              <div className="mb-4">
                {/* <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <text x="12" y="16" textAnchor="middle" fontSize="9" fill="currentColor" fontWeight="bold">SOC2</text>
                </svg> */}
                <img src={rating} alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SOC 2 Type II & GDPR Compliance Supported</h3>
              <p className="text-gray-300 text-sm">
                Designed to meet the demands of complex organizations with 1000+ reps. 99% uptime.
              </p>
            </div>

            {/* Feature 3 - Integration */}
            <div>
              <div className="mb-4">
                {/* <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="6" cy="18" r="2" strokeWidth="2" />
                  <circle cx="18" cy="6" r="2" strokeWidth="2" />
                  <path d="M6 16l12-10" strokeWidth="2" />
                </svg> */}
                <img src={ratinglogo3} alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrate seamlessly with your workflow</h3>
              <p className="text-gray-300 text-sm">
                25+ integrations and custom integrations upon request.
              </p>
            </div>

            {/* Feature 4 - Localisation */}
            <div>
              <div className="mb-4">
                {/* <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M12 2a15 15 0 0 1 0 20" strokeWidth="2" />
                  <path d="M2 12h20" strokeWidth="2" />
                </svg> */}
                <img src={golbal} alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Localisation, 40+ languages</h3>
              <p className="text-gray-300 text-sm">
                Global-first. Trovex AI is used by reps from over 40 different countries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;