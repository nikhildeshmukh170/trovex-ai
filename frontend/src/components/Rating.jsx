import React from "react";
import { motion } from "framer-motion";
import golbal from "../assets/global.png";
import encryption from "../assets/encryption.png";
import ratinglogo3 from "../assets/ratinglogo3.png";
import rating from "../assets/FooterrankLogo.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const Rating = () => {
  return (
    <motion.div
      className="flex justify-center items-center w-full py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.div
        className="flex flex-col gap-8 relative m-4 px-12 py-7 max-w-[1100px] w-full justify-center items-center align-middle bg-[#2f1043] rounded-3xl font-sans text-white"
        variants={zoomIn}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_200px_at_80%_100px,#ffb2a752,transparent)] opacity-70 rounded-3xl"></div>

        <div className="max-w-7xl mx-auto w-full">
          {/* Header & Rating */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
            variants={fadeInUp}
          >
            {/* Heading and Description */}
            <div className="max-w-md mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">Engineered for Large Corporations</h2>
              <p className="text-gray-300">
                Trovex AI meets elite benchmarks set by verified third-party leaders.
              </p>
            </div>

            {/* Rating Section */}
            <motion.div className="flex items-center p-10" variants={zoomIn}>
              <div className="relative flex flex-col items-center">
                {/* Laurels */}
                <motion.svg
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-0 h-16 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M12 6C10 8 9 11 9 15C7 13 6 11 6 9C8 7 10 6 12 6Z" stroke="currentColor" strokeWidth="1" />
                  <path d="M12 8C10 10 9 12 9 16C7 14 6 12 6 10C8 8 10 8 12 8Z" stroke="currentColor" strokeWidth="1" />
                  <path d="M12 10C10 12 9 13 9 17C7 15 6 13 6 11C8 9 10 10 12 10Z" stroke="currentColor" strokeWidth="1" />
                </motion.svg>

                <motion.div className="flex flex-col items-center mx-10" whileHover={{ scale: 1.05 }}>
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
                </motion.div>

                <motion.svg
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute right-0 h-16 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M12 6C14 8 15 11 15 15C17 13 18 11 18 9C16 7 14 6 12 6Z" stroke="currentColor" strokeWidth="1" />
                  <path d="M12 8C14 10 15 12 15 16C17 14 18 12 18 10C16 8 14 8 12 8Z" stroke="currentColor" strokeWidth="1" />
                  <path d="M12 10C14 12 15 13 15 17C17 15 18 13 18 11C16 9 14 10 12 10Z" stroke="currentColor" strokeWidth="1" />
                </motion.svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={fadeInUp}
          >
            {[ // features array
              {
                img: encryption,
                title: "Strong Encryption, Enterprise SSO & SIEM",
                desc: "Trovex AI supports AES 256 Bit Encryption Out of the box.",
              },
              {
                img: rating,
                title: "SOC 2 Type II & GDPR Compliance Supported",
                desc: "Designed to meet the demands of complex organizations with 1000+ reps. 99% uptime.",
              },
              {
                img: ratinglogo3,
                title: "Integrate seamlessly with your workflow",
                desc: "25+ integrations and custom integrations upon request.",
              },
              {
                img: golbal,
                title: "Localisation, 40+ languages",
                desc: "Global-first. Trovex AI is used by reps from over 40 different countries.",
              },
            ].map((feature, idx) => (
              <motion.div key={idx} variants={zoomIn} whileHover={{ scale: 1.03 }}>
                <img src={feature.img} alt="" className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Rating;
