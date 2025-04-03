import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar, FaRegClock, FaBookmark, FaRegBookmark } from "react-icons/fa";

// Placeholder Car Data
const car = {
  id: 1,
  image: "/testcar.jpg", // Replace with actual car image
  year: 2022,
  make: "BMW",
  model: "M4",
  description: "High-performance coupe with a twin-turbo inline-6 engine.",
  location: "Nairobi, Kenya",
  featured: true,
  rating: 4.7,
  reviews: 120,
  currentBid: 4500000, // Price in Ksh
  bidEndsAt: new Date().getTime() + 2 * 24 * 60 * 60 * 1000, // Ends in 2 days
};

const CarListingCard = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false); // Example bookmark state

  // Countdown Timer
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = car.bidEndsAt - now;

      if (distance < 0) {
        setTimeLeft("Auction Ended");
        return;
      }

      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleBookmark = (e) => {
    e.preventDefault(); // Prevent link navigation
    setIsBookmarked(!isBookmarked);
    // Here, you would typically add logic to update the user's watchlist
  };

  return (
    <Link
      to={`/cars/${car.id}`}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
        {/* Car Image */}
        <div className="relative">
          <img
            src={car.image}
            alt={`${car.year} ${car.make} ${car.model}`}
            className="w-full h-56 object-cover group-hover:brightness-90 transition-all duration-300"
          />
          {car.featured && (
            <div className="absolute top-3 left-3 bg-[#D72638] text-white px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-lg shadow-md">
              Featured
            </div>
          )}
          {isHovered && (
            <button
              onClick={handleBookmark}
              className="absolute top-3 right-3 bg-white bg-opacity-80 rounded-full p-2 transition-opacity duration-300"
            >
              {isBookmarked ? (
                <FaBookmark className="text-[#0056D2] text-lg" />
              ) : (
                <FaRegBookmark className="text-gray-600 text-lg" />
              )}
            </button>
          )}
        </div>

        {/* Car Details */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-black">
            {car.year} {car.make} {car.model}
          </h3>
          <p className="text-gray-600 text-sm mb-3">{car.description}</p>

          {/* Location */}
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <FaMapMarkerAlt className="mr-1 text-[#D72638]" />
            {car.location}
          </div>

          {/* Rating */}
          <div className="flex items-center text-yellow-500 text-sm mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < Math.round(car.rating) ? "text-yellow-400" : "text-gray-300"} />
            ))}
            <span className="ml-2 text-gray-700 font-medium">
              {car.rating} ({car.reviews} reviews)
            </span>
          </div>

          {/* Current Bid & Countdown Timer */}
          <div className="flex justify-between items-center mt-3">
            <span className="text-lg font-bold text-[#0056D2]">
              Ksh {car.currentBid.toLocaleString()}
            </span>
            <div className="flex items-center text-gray-700 text-sm font-semibold">
              <FaRegClock className="mr-1 text-gray-600" />
              <span className="text-[#D72638]">{timeLeft}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarListingCard;