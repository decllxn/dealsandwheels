import { useState } from "react";
import { FaHeart, FaBalanceScale, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { MdOutlineLocalOffer, MdOutlineAccessTime } from "react-icons/md";

const cars = [
  {
    id: 1,
    image: "/testcar.jpg",
    name: "2022 BMW M4 Competition",
    price: "Ksh 7,800,000",
    oldPrice: "Ksh 8,200,000",
    discount: "5%",
    mileage: "8,500 km",
    location: "Nairobi, Kenya",
    dealer: "Elite Auto Dealers",
    dealerVerified: true,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyStyle: "Coupe",
    tags: ["Hot Deal", "Certified Dealer"],
  },
  {
    id: 2,
    image: "/testcar.jpg",
    name: "2023 Toyota Land Cruiser GR Sport",
    price: "Ksh 14,500,000",
    mileage: "2,000 km",
    location: "Mombasa, Kenya",
    dealer: "Prestige Motors",
    dealerVerified: true,
    fuelType: "Diesel",
    transmission: "Automatic",
    bodyStyle: "SUV",
    tags: ["New Arrival", "Best Seller"],
  },
  // Add more cars...
];

const ListingGrid = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 py-12">
      {/* Header & Sorting Options */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-900 transition-all">
            Sort by: Price ↓
          </button>
          <button className="px-4 py-2 bg-gray-200 text-black rounded-lg text-sm font-semibold hover:bg-gray-300 transition-all">
            Filters
          </button>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="relative bg-white shadow-lg rounded-xl overflow-hidden group transition-all hover:shadow-2xl"
          >
            {/* Car Image */}
            <div className="relative">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover group-hover:scale-105 transition-all" />
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {car.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-all">
                  <FaHeart className="text-red-500" />
                </button>
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-all">
                  <FaBalanceScale className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* Car Info */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 truncate">{car.name}</h3>
              <p className="text-gray-600 text-sm flex items-center gap-1">
                <FaMapMarkerAlt className="text-gray-500" /> {car.location}
              </p>

              {/* Price & Discount */}
              <div className="mt-2 flex items-center justify-between">
                <p className="text-xl font-bold text-black">{car.price}</p>
                {car.oldPrice && (
                  <div className="text-sm text-gray-500 line-through">{car.oldPrice}</div>
                )}
                {car.discount && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                    -{car.discount}
                  </span>
                )}
              </div>

              {/* Additional Info */}
              <div className="mt-2 flex items-center gap-3 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <MdOutlineLocalOffer className="text-blue-500" /> {car.bodyStyle}
                </span>
                <span className="flex items-center gap-1">
                  <MdOutlineAccessTime className="text-yellow-500" /> {car.mileage}
                </span>
              </div>

              {/* Dealer Info */}
              <div className="mt-3 flex items-center gap-2">
                {car.dealerVerified && (
                  <FaCheckCircle className="text-green-500" title="Verified Dealer" />
                )}
                <p className="text-sm text-gray-700">{car.dealer}</p>
              </div>

              {/* View Details Button */}
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition-all">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingGrid;