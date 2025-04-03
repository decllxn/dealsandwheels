import React, { useState, useEffect, useRef } from "react";
import { Clock, DollarSign, List, MessageCircle } from "lucide-react";

const StickyBidBar = ({ timeLeft, highBid, bids, comments }) => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = window.scrollY;
        const triggerPoint = scrollRef.current.offsetTop + 200;

        if (scrollPosition > triggerPoint) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={scrollRef}>
      <div style={{ height: "1px", opacity: 0, position: "absolute", top: "0" }} />

      {isVisible && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-[#1f1f1f] p-4 text-white z-50 shadow-lg rounded-lg mt-3">
          <div className="flex items-center justify-center flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Time Left</p>
                <p className="font-semibold">{timeLeft}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">High Bid</p>
                <p className="font-semibold">${highBid.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <List className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Bids</p>
                <p className="font-semibold">{bids}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Comments</p>
                <p className="font-semibold">{comments}</p>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
              Place a Bid
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StickyBidBar;