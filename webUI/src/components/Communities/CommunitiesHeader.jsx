import React, { useState, useRef, useEffect } from "react";
import { Filter, SlidersHorizontal, Plus, Search } from "lucide-react";

const CommunitiesHeader = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortDropdownRef = useRef(null);

  const handleSortClick = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleClickOutside = (event) => {
    if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
      setIsSortOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-[var(--navbar-height)] bg-white py-4 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between border-b border-[#1f1f1f] z-40 gap-3 md:gap-0">
      
      {/* Left Side - Title & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center w-full md:w-auto space-y-3 sm:space-y-0 sm:space-x-4">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          Communities
        </h1>
        
        {/* Search Bar (Full width on small screens) */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search Communities..."
            className="w-full bg-gray-100 rounded-md py-2 px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 border border-[#1f1f1f]"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Right Side - Buttons */}
      <div className="flex items-center w-full md:w-auto justify-center md:justify-end space-x-2">
        {/* Sort Button with Dropdown */}
        <div ref={sortDropdownRef} className="relative">
          <button
            onClick={handleSortClick}
            className="flex items-center px-3 py-2 bg-gray-100 rounded-md text-sm text-gray-800 hover:bg-gray-200 transition-colors duration-200 border border-[#1f1f1f]"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Sort
          </button>

          {/* Dropdown Menu (Animated) */}
          {isSortOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-[#1f1f1f] overflow-hidden animate-fade-in">
              {["Popular", "Newest", "Alphabetical"].map((option, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Filter Button */}
        <button className="flex items-center px-3 py-2 bg-gray-100 rounded-md text-sm text-gray-800 hover:bg-gray-200 transition-colors duration-200 border border-[#1f1f1f]">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </button>

        {/* Create Button */}
        <button className="flex items-center px-3 py-2 bg-blue-600 rounded-md text-sm font-semibold text-white hover:bg-blue-700 transition-colors duration-200">
          <Plus className="w-4 h-4 mr-2" />
          Create
        </button>
      </div>
    </div>
  );
};

export default CommunitiesHeader;
