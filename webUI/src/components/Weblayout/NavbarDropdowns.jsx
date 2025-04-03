import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export const VehiclesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        className="text-white text-sm md:text-base lg:text-lg flex items-center space-x-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Vehicles</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="absolute mt-2 w-40 bg-[#1F1F1F]/90 backdrop-blur-lg rounded-lg shadow-xl border border-gray-700 overflow-hidden z-50"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/cars-for-sale"
              className="block px-4 py-2 text-white hover:bg-[#292929] rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Cars For Sale
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/spare-parts"
              className="block px-4 py-2 text-white hover:bg-[#292929] rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Spare Parts
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const MoreDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        className="text-white text-sm md:text-base lg:text-lg flex items-center space-x-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>More</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="absolute mt-2 w-40 bg-[#1F1F1F]/90 backdrop-blur-lg rounded-lg shadow-xl border border-gray-700 overflow-hidden z-50"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/blog"
              className="block px-4 py-2 text-white hover:bg-[#292929] rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/about-us"
              className="block px-4 py-2 text-white hover:bg-[#292929] rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/contact"
              className="block px-4 py-2 text-white hover:bg-[#292929] rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};