import React, { useState } from "react";
import { Bookmark, Share2, Star } from "lucide-react";

const CarHeader = ({ year, make, model, description, onAddToWatchlist, onShare, onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRate = (value) => {
    setRating(value);
    onRate(value); // Call the onRate function passed as a prop
  };

  return (
    <div className="w-full bg-gray-100 p-6 border-b border-gray-200">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Left Side: Car Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {year} {make} {model}
          </h2>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Right Side: Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onAddToWatchlist}
            className="text-gray-600 hover:text-blue-600"
            aria-label="Add to Watchlist"
          >
            <Bookmark className="w-6 h-6" />
          </button>

          <button
            onClick={onShare}
            className="text-gray-600 hover:text-blue-600"
            aria-label="Share"
          >
            <Share2 className="w-6 h-6" />
          </button>

          {/* Rating Stars */}
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => handleRate(value)}
                className={`text-gray-400 hover:text-yellow-500 ${
                  value <= rating ? "text-yellow-500" : ""
                }`}
                aria-label={`Rate ${value} stars`}
              >
                <Star className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarHeader;