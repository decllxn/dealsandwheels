import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaSlidersH, FaChevronDown, FaTag, FaShieldAlt, FaMoneyBillWave } from "react-icons/fa";

const CarsForSaleFilter = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    priceRange: "",
    transmission: "",
    drivetrain: "",
    fuelType: "",
    bodyStyle: "",
    warranty: "",
    dealerRating: "",
    location: "",
  });

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/cars-for-sale?query=${search}&${new URLSearchParams(filters).toString()}`);
  };

  const selectStyle = "relative w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 appearance-none";
  const iconStyle = "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500";

  return (
    <div className="w-full max-w-[1600px] mx-auto bg-white shadow-xl rounded-xl p-6 mt-12">
      {/* Header Section */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-black uppercase">Cars for Sale</h2>

        {/* Quick Sort Filters */}
        <div className="hidden md:flex gap-4">
          {["On Sale Now", "Best Deals", "Newest Listings", "Lowest Price", "Top Rated Dealers"].map((filter, index) => (
            <button
              key={index}
              className="text-gray-700 hover:text-blue-600 transition-all text-sm font-medium"
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
          {/* Price Range */}
          <div className="relative">
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              className={selectStyle}
            >
              <option value="">Price Range</option>
              <option value="Under 1M">Under 1M</option>
              <option value="1M - 5M">1M - 5M</option>
              <option value="5M - 10M">5M - 10M</option>
              <option value="10M+">10M+</option>
            </select>
            <FaMoneyBillWave className={iconStyle} />
          </div>
          <div className="relative">
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              className={selectStyle}
            >
              <option value="">Price Range</option>
              <option value="Under 1M">Under 1M</option>
              <option value="1M - 5M">1M - 5M</option>
              <option value="5M - 10M">5M - 10M</option>
              <option value="10M+">10M+</option>
            </select>
            <FaMoneyBillWave className={iconStyle} />
          </div>

          {/* Transmission */}
          <div className="relative">
            <select
              value={filters.transmission}
              onChange={(e) => setFilters({ ...filters, transmission: e.target.value })}
              className={selectStyle}
            >
              <option value="">Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
            <FaChevronDown className={iconStyle} />
          </div>

          {/* Fuel Type */}
          <div className="relative">
            <select
              value={filters.fuelType}
              onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
              className={selectStyle}
            >
              <option value="">Fuel Type</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
            </select>
            <FaChevronDown className={iconStyle} />
          </div>

          {/* Warranty */}
          <div className="relative">
            <select
              value={filters.warranty}
              onChange={(e) => setFilters({ ...filters, warranty: e.target.value })}
              className={selectStyle}
            >
              <option value="">Warranty</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <FaShieldAlt className={iconStyle} />
          </div>

          {/* Dealer Rating */}
          <div className="relative">
            <select
              value={filters.dealerRating}
              onChange={(e) => setFilters({ ...filters, dealerRating: e.target.value })}
              className={selectStyle}
            >
              <option value="">Dealer Rating</option>
              <option value="5 Stars">5 Stars</option>
              <option value="4+ Stars">4+ Stars</option>
              <option value="3+ Stars">3+ Stars</option>
            </select>
            <FaTag className={iconStyle} />
          </div>

          {/* Location */}
          <div className="relative">
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className={selectStyle}
            >
              <option value="">Location</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Kisumu">Kisumu</option>
              <option value="Nakuru">Nakuru</option>
            </select>
            <FaChevronDown className={iconStyle} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarsForSaleFilter;