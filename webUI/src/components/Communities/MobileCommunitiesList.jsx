import React, { useRef, useState } from "react";
import { Users, ChevronLeft, ChevronRight } from "lucide-react";

const MobileCommunitiesList = ({ onCommunitySelect }) => {
  const communities = {
    recent: [
      { name: "Classic Car Enthusiasts", profilePic: "https://via.placeholder.com/100x100", members: 1200 },
      { name: "Muscle Car Lovers", profilePic: "https://via.placeholder.com/100x100", members: 850 },
      { name: "Electric Car Innovators", profilePic: "https://via.placeholder.com/100x100", members: 1500 },
    ],
    popular: [
      { name: "JDM Car Club", profilePic: "https://via.placeholder.com/100x100", members: 2500 },
      { name: "Supercar Owners", profilePic: "https://via.placeholder.com/100x100", members: 1800 },
      { name: "Off-Road Adventurers", profilePic: "https://via.placeholder.com/100x100", members: 2200 },
    ],
    all: [
      { name: "Vintage Car Fans", profilePic: "https://via.placeholder.com/100x100", members: 900 },
      { name: "Car Detailing Gurus", profilePic: "https://via.placeholder.com/100x100", members: 1100 },
      { name: "Track Day Enthusiasts", profilePic: "https://via.placeholder.com/100x100", members: 1300 },
      { name: "Car Audio Geeks", profilePic: "https://via.placeholder.com/100x100", members: 1600 },
    ],
  };

  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 250;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 250;
    }
  };

  return (
    <div 
      className="relative bg-white shadow-lg rounded-xl p-6 border border-gray-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Communities</h2>

      <div className="relative">
        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth snap-x gap-6 pb-2 no-scrollbar"
        >
          {Object.entries(communities).map(([category, list]) => (
            <div key={category} className="flex-shrink-0">
              <h3 className="text-lg font-medium text-gray-700 capitalize mb-3">{category}</h3>
              <div className="flex space-x-6">
                {list.map((community, i) => (
                  <div
                    key={i}
                    className="cursor-pointer text-center flex flex-col items-center transition-transform transform hover:scale-105"
                    onClick={() => onCommunitySelect(community.name)}
                  >
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
                      <img
                        src={community.profilePic}
                        alt={community.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-2 text-sm font-semibold text-gray-800">{community.name}</p>
                    <p className="text-xs text-gray-500 flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {community.members.toLocaleString()} members
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Appear on Hover */}
        {isHovered && (
          <>
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-full p-2 transition-opacity duration-300 hover:bg-opacity-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-full p-2 transition-opacity duration-300 hover:bg-opacity-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileCommunitiesList;
