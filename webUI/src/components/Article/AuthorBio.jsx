import React from "react";
import { FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";

const AuthorBio = () => {
  return (
    <div className="mt-12 flex flex-col sm:flex-row items-center bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      
      {/* 📸 Author Image with Fancy Border */}
      <div className="relative">
        <img
          src="/testcar.jpg"
          alt="Author"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[4px] border-gray-200 dark:border-gray-700 shadow-md"
        />
        <div className="absolute -bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
      </div>

      {/* 📝 Author Info */}
      <div className="sm:ml-6 text-center sm:text-left mt-4 sm:mt-0">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          John Doe
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-1">
          🚗 Automotive Journalist | Auction Expert  
        </p>

        {/* ✨ Subtle Divider */}
        <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mx-auto sm:mx-0"></div>

        {/* 🔗 Social Links */}
        <div className="mt-4 flex justify-center sm:justify-start space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition">
            <FaLinkedin size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition">
            <FaGlobe size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;

