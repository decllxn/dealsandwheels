import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaSlidersH, FaChevronDown } from "react-icons/fa";

const SearchFilterBar = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    transmission: "",
    drivetrain: "",
    fuel_type: "",
    body_style: "",
    title_status: "",
    seller_type: "",
  });
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/auctions/auctions/?search=${search}&${new URLSearchParams(filters).toString()}`);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const selectStyle = "relative w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 appearance-none";
  const iconStyle = "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500";

  return (
    <div className="w-full max-w-[1600px] mx-auto bg-white shadow-xl rounded-xl p-6 mt-12">
      {/* Header Section */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-black uppercase">Auctions</h2>

        {/* Quick Sort Filters (You'll need to implement the logic for these) */}
        <div className="hidden md:flex gap-4">
          {["Ending Soon", "New Listings", "No Reserve", "Lowest Mileage", "Nearest to Me"].map((filter, index) => (
            <button
              key={index}
              className="text-gray-700 hover:text-blue-600 transition-all text-sm font-medium"
              onClick={() => {
                // Implement your sorting logic here, potentially updating the URL
                console.log(`Sorting by: ${filter}`);
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Expand Filters Button */}
        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-900 transition-all"
        >
          <FaSlidersH />
          More Filters
        </button>
      </div>

      {/* Search Input */}
      <div className="relative flex items-center w-full mt-4">
        <FaSearch className="absolute left-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search for cars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
        />
        <button
          onClick={handleSearch}
          className="ml-4 bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-all"
        >
          Search
        </button>
      </div>

      {/* Advanced Filters - Expandable */}
      {showAdvancedFilters && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Transmission */}
          <div className="relative">
            <select
              name="transmission"
              value={filters.transmission}
              onChange={handleFilterChange}
              className={selectStyle}
            >
              <option value="">Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="CVT">CVT</option>
              <option value="Dual-Clutch">Dual-Clutch</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
            <FaChevronDown className={iconStyle} />
          </div>

          {/* Drivetrain */}
          <div className="relative">
            <select
              name="drivetrain"
              value={filters.drivetrain}
              onChange={handleFilterChange}
              className={selectStyle}
            >
              <option value="">Drivetrain</option>
              <option value="FWD">FWD</option>
              <option value="RWD">RWD</option>
              <option value="AWD">AWD</option>
              <option value="4WD">4WD</option>
            </select>
            <FaChevronDown className={iconStyle} />
          </div>

          {/* Fuel Type */}
          <div className="relative">
            <select
              name="fuel_type"
              value={filters.fuel_type}
              onChange={handleFilterChange}
              className={selectStyle}
            >
              <option value="">Fuel Type</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
              <option value="Hydrogen">Hydrogen</option>
              <option value="Ethanol">Ethanol</option>
              <option value="CNG">CNG</option>
            </select>
            <FaChevronDown className={iconStyle} />
          </div>

          {/* Body Style */}
          <div className="relative">
            <select
              name="body_style"
              value={filters.body_style}
              onChange={handleFilterChange}
              className={selectStyle}
            >
              <option value="">Body Style</option>
              <option value="Sedan">Sedan</option>
              <option value="Coupe">Coupe</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Convertible">Convertible</option>
              <option value="SUV">SUV</option>
              <option value="Crossover">Crossover</option>
              <option value="Pickup Truck">Pickup Truck</option>
              <option value="Van">Van</option>
              <option value="Wagon">Wagon</option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="ATV">ATV</option>
              <option value="RV">RV</option>
              <option value="Heavy Truck">Heavy Truck</option>
              <option value="Bus">Bus</option>
              <option value="Tractor">Tractor</option>
            </select>
            <FaChevronDown className={iconStyle} />
          </div>

          {/* Title Status */}
          <div className="relative">
            <select
              name="title_status"
              value={filters.title_status}
              onChange={handleFilterChange}
              className={selectStyle}
            >
              <option value="">Title Status</option>
              <option value="Clean">Clean</option>
              <option value="Salvage">Salvage</option>
              <option value="Rebuilt">Rebuilt</option>
              <option value="Parts Only">Parts Only</option>
            </select>
            <FaChevronDown className={iconStyle} />
          </div>

          {/* Seller Type */}
          <div className="relative">
            <select
              name="seller_type"
              value={filters.seller_type}
              onChange={handleFilterChange}
              className={selectStyle}
            >
              <option value="">Seller Type</option>
              <option value="Dealer">Dealer</option>
              <option value="Private Seller">Private Seller</option>
              <option value="Auction House">Auction House</option>
            </select>
            <FaChevronDown className={iconStyle} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilterBar;