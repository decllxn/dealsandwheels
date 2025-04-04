import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaCar, FaUsers, FaChevronDown } from "react-icons/fa";
import ProfileDropdown from "./ProfileDropdown";
import AuthModal from "./AuthModal";
import ThemeToggle from "./ThemeToggle";
import { VehiclesDropdown, MoreDropdown } from "./NavbarDropdowns"; // Import from external file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <nav className="bg-white dark:bg-[#1F1F1F] text-black dark:text-white px-6 py-3 shadow-lg fixed top-0 left-0 w-full z-50 border-b border-gray-600">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-2xl font-bold tracking-wide">
            <span className="text-white">Deals</span> 
            <span className="text-[#4A90E2]">&</span> 
            <span className="text-white">Wheels</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">

          {/* Auctions */}
          <motion.div key="auctions" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Link 
              to="/auctions" 
              className="text-white text-sm md:text-base lg:text-lg relative group transition duration-300 flex items-center space-x-2"
            >
              <span>Auctions</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#D72638] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          </motion.div>

          {/* Vehicles Dropdown */}
          <VehiclesDropdown />

          {/* Communities */}
          <motion.div key="communities" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Link 
              to="/communities" 
              className="text-white text-sm md:text-base lg:text-lg relative group transition duration-300 flex items-center space-x-2"
            >
              <FaUsers size={18} />
              <span>Communities</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#D72638] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          </motion.div>

          {/* More Dropdown */}
          <MoreDropdown />

          {/* Sell a Car Button */}
          <Link 
            to="/sell-a-car" 
            className="px-4 md:px-5 py-2 bg-[#D72638] hover:bg-[#B71C29] text-white rounded-lg text-sm md:text-base font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg"
          >
            <FaCar size={18} /> <span>Sell a Car</span>
          </Link>

          {/* Sign In Button */}
          <button 
            onClick={() => setShowAuthModal(true)} 
            className="px-4 md:px-5 py-2 bg-[#4A90E2] hover:bg-[#357ABD] text-white rounded-lg text-sm md:text-base font-medium transition-all duration-300 shadow-lg"
          >
            Sign In
          </button>
          
          {/* Profile Dropdown */}
          <ProfileDropdown />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-between w-8 h-6 z-50 relative" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-8 h-[3px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block w-8 h-[3px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-8 h-[3px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.4 }} 
            className="md:hidden absolute top-full left-0 w-full bg-[#1F1F1F] shadow-lg border-t border-gray-600"
          >
            <div className="flex flex-col items-center py-6 space-y-4">

            <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/auctions"
          className="text-sm text-white relative group transition duration-300 flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          Auctions
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#D72638] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/cars-for-sale"
          className="text-sm text-white relative group transition duration-300 flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          Cars For Sale
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#D72638] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/spare-parts"
          className="text-sm text-white relative group transition duration-300 flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          Spare Parts
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#D72638] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/communities"
          className="text-sm text-white relative group transition duration-300 flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          Communities
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#D72638] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/blog"
          className="text-sm text-white relative group transition duration-300 flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          Blog
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#D72638] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/About-us"
          className="text-sm text-white relative group transition duration-300 flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          About Us
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#D72638] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/contact"
          className="text-sm text-white relative group transition duration-300 flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          Contact
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#D72638] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
      </motion.div>
              
              {/* Sell a Car Button */}
              <Link 
                to="/sell-a-car" 
                className="px-4 py-2 bg-[#D72638] hover:bg-[#B71C29] text-white rounded-lg text-sm font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg"
              >
                <FaCar size={18} /> <span>Sell a Car</span>
              </Link>

              <button 
                onClick={() => setShowAuthModal(true)} 
                className="px-4 py-2 bg-[#4A90E2] hover:bg-[#357ABD] text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-lg"
              >
                Sign In
              </button>

              <ProfileDropdown />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Authentication Modal */}
      <AuthModal 
        showAuthModal={showAuthModal} 
        setShowAuthModal={setShowAuthModal} 
        isSignUp={isSignUp} 
        setIsSignUp={setIsSignUp} 
      />
    </nav>
  );
};

export default Navbar;