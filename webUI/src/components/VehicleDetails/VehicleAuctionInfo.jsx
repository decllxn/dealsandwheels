import React from 'react';
import { FaClock, FaChartLine, FaGavel, FaInfoCircle } from 'react-icons/fa'; // Import icons

const VehicleAuctionInfo = ({
  vehicleName = 'Classic Vehicle Auction',
  currentBid = '$45,000',
  bidderName = 'Bidder123',
  sellerName = 'AutoSeller',
  endingTime = 'Wed, Apr 3 7:00 PM',
  bidCount = '8',
  viewCount = '9,250',
  placeBidLink = '#',
  watchAuctionLink = '#',
  notifyLink = '#',
  timeRemaining = '2 days 5 hours', // Added time remaining
  location = 'Los Angeles, CA', // Added location
}) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side (Auction Details) */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{vehicleName}</h2>

          <div className="flex items-center mb-4">
            <FaGavel className="text-blue-500 mr-2" />
            <p className="text-sm text-gray-600">Current Highest Bid:</p>
            <div className="ml-2">
              <span className="text-xl font-bold text-blue-600">{currentBid}</span>
              <span className="ml-1 text-sm text-gray-700">({bidderName})</span>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <FaClock className="text-gray-500 mr-2" />
            <p className="text-sm text-gray-600">Ending In:</p>
            <span className="ml-2 font-medium text-gray-800">{timeRemaining} ({endingTime})</span>
          </div>

          <div className="flex items-center mb-4">
            <FaChartLine className="text-green-500 mr-2" />
            <p className="text-sm text-gray-600">Bids:</p>
            <span className="ml-2 font-medium text-gray-800">{bidCount}</span>
            <p className="ml-4 text-sm text-gray-600">Views:</p>
            <span className="ml-2 font-medium text-gray-800">{viewCount}</span>
          </div>

          <div className="flex items-center mb-4">
            <FaInfoCircle className="text-gray-500 mr-2" />
            <p className="text-sm text-gray-600">Seller:</p>
            <span className="ml-2 font-medium text-gray-800">{sellerName} ({location})</span>
          </div>

          <a
            href={placeBidLink}
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-center transition-colors duration-300"
          >
            Place Bid
          </a>
        </div>

        {/* Right Side (Links and Information) */}
        <div className="p-6 border-l border-gray-200">
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">How Buying Works</p>
            <a href={watchAuctionLink} className="text-blue-600 text-sm hover:underline">
              Watch Auction Details
            </a>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Get Notified</p>
            <a href={notifyLink} className="text-blue-600 text-sm hover:underline">
              Get Notified About Similar Auctions
            </a>
          </div>

          {/* Add any other features you want here, such as a map, contact seller, etc. */}
        </div>
      </div>
    </div>
  );
};

export default VehicleAuctionInfo;