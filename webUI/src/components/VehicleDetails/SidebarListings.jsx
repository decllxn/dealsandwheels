import React from "react";
import { FaClock } from "react-icons/fa";

const SidebarListings = ({ title, listings }) => {
  return (
    <div className="bg-[#1f1f1f] text-white p-5 rounded-xl mb-5 mt-10 shadow-lg border border-gray-800">
      {/* Section Title */}
      <h2 className="text-xl font-bold mb-4 text-gray-100 border-b border-gray-700 pb-2">{title}</h2>

      {/* Car Listings */}
      {listings.map((car) => (
        <div
          key={car.id}
          className="mb-4 p-3 bg-white rounded-lg transition transform hover:scale-105 hover:shadow-xl relative"
        >
          {/* Car Image */}
          <div className="relative">
            <img
              src="/testcar.jpg"
              alt={`${car.make} ${car.model}`}
              className="w-full h-32 object-cover rounded-md"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-xs text-white px-2 py-1 rounded-md">
              {car.year}
            </div>
          </div>

          {/* Car Details */}
          <h3 className="mt-3 font-semibold text-lg text-[#1f1f1f]">{car.make} {car.model}</h3>
          
          {/* Auction Timer & Status */}
          <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
            <div className="flex items-center gap-1">
              <FaClock className="text-yellow-500" />
              <span className="text-[#1f1f1f]">Ends in: {car.timeLeft}</span>
            </div>
            <span
              className={`px-2 py-1 rounded-md text-xs font-semibold ${
                car.isHot
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {car.isHot ? "🔥 Hot Auction" : "Auction"}
            </span>
          </div>
        </div>
      ))}

      {/* View More Button */}
      <button className="w-full mt-4 py-2 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all">
        View More Listings
      </button>
    </div>
  );
};

export default SidebarListings;