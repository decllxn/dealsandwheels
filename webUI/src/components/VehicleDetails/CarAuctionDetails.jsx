import { useState, useEffect } from "react";
import { FaClock, FaGavel, FaComment } from "react-icons/fa";

const CarAuctionDetails = ({ highestBid, bidCount, auctionEndTime }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const remaining = auctionEndTime - now;

      if (remaining < 0) {
        setTimeLeft("Auction Ended");
        return;
      }

      const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remaining / (1000 * 60)) % 60);
      const seconds = Math.floor((remaining / 1000) % 60);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [auctionEndTime]);

  return (
    <div className="text-white py-6">
      {/* Section Divider */}
      <hr className="border-gray-700 mb-6" />

      {/* Time Left */}
      <div className="flex justify-between items-center text-lg font-medium mb-3">
        <div className="flex items-center gap-3">
          <FaClock className="text-red-500 text-xl" />
          <span className="text-[#1f1f1f]">Time Left:</span>
        </div>
        <span className="text-black text-lg font-semibold">{timeLeft}</span>
      </div>

      {/* Highest Bid */}
      <div className="flex justify-between items-center text-lg font-medium mb-3">
        <div className="flex items-center gap-3">
          <FaGavel className="text-green-400 text-xl" />
          <span className="text-[#1f1f1f]">Highest Bid:</span>
        </div>
        <span className="text-[#1f1f1f] text-lg font-semibold">Ksh {highestBid.toLocaleString()}</span>
      </div>

      {/* Bid Count */}
      <div className="flex justify-between items-center text-lg font-medium mb-6">
        <div className="flex items-center gap-3">
          <FaComment className="text-blue-400 text-xl" />
          <span className="text-[#1f1f1f]">Total Bids:</span>
        </div>
        <span className="text-[#1f1f1f] text-lg font-semibold">{bidCount}</span>
      </div>

      {/* Call-to-Action Button */}
      <button className="w-full bg-[#0056D2] hover:bg-[#003F9A] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl">
        Place a Bid
      </button>

      {/* Section Divider */}
      <hr className="border-gray-700 mt-6" />
    </div>
  );
};

export default CarAuctionDetails;