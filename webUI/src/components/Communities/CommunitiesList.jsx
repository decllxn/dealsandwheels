import React, { useState } from "react";
import { Users, ChevronRight } from "lucide-react";

const CommunitiesList = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  const communities = {
    recent: [
      { name: "Classic Car Enthusiasts", profilePic: "https://via.placeholder.com/60x60", members: 1200 },
      { name: "Muscle Car Lovers", profilePic: "https://via.placeholder.com/60x60", members: 850 },
      { name: "Electric Car Innovators", profilePic: "https://via.placeholder.com/60x60", members: 1500 },
    ],
    popular: [
      { name: "JDM Car Club", profilePic: "https://via.placeholder.com/60x60", members: 2500 },
      { name: "Supercar Owners", profilePic: "https://via.placeholder.com/60x60", members: 1800 },
      { name: "Off-Road Adventurers", profilePic: "https://via.placeholder.com/60x60", members: 2200 },
    ],
    all: [
      { name: "Vintage Car Fans", profilePic: "https://via.placeholder.com/60x60", members: 900 },
      { name: "Car Detailing Gurus", profilePic: "https://via.placeholder.com/60x60", members: 1100 },
      { name: "Track Day Enthusiasts", profilePic: "https://via.placeholder.com/60x60", members: 1300 },
      { name: "Car Audio Geeks", profilePic: "https://via.placeholder.com/60x60", members: 1600 },
    ],
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Communities</h2>
      <div className="space-y-4">
        {Object.entries(communities).map(([category, list]) => (
          <div key={category}>
            <h3 className="text-lg font-medium text-gray-700 capitalize mb-2">
              {category.replace("_", " ")}
            </h3>
            <ul className="space-y-2">
              {list.map((community, i) => (
                <li
                  key={i}
                  className="flex items-center p-3 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => setSelectedCommunity(community.name)}
                >
                  <img
                    src={community.profilePic}
                    alt={community.name}
                    className="w-10 h-10 rounded-xl mr-3"
                  />
                  <div className="flex-grow">
                    <p className="font-medium">{community.name}</p>
                    <p className="text-sm text-gray-500">
                      <Users className="inline-block w-4 h-4 mr-1" />
                      {community.members.toLocaleString()} members
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitiesList;