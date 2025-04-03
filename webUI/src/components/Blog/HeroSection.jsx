import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div 
      className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center flex items-center" 
      style={{ backgroundImage: "url('/testcar.jpg')" }} // Use a premium image of a car/race track
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
        {/* Heading Animation */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold leading-tight"
        >
          The Road to Smarter Car Buying Starts Here
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-3 text-lg md:text-xl text-gray-300"
        >
          Exclusive insights, expert reviews, and auction strategies to get the **best deals on your next car**.
        </motion.p>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 w-full max-w-lg mx-auto"
        >
          <div className="flex bg-white text-gray-900 rounded-lg shadow-md">
            <input 
              type="text" 
              placeholder="Search car reviews, market trends..." 
              className="flex-1 px-4 py-3 outline-none text-lg rounded-l-lg"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-r-lg transition">
              🔍 Search
            </button>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4"
        >
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition">
            Read Car Reviews
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition">
            Explore Market Trends
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;