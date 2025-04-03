import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// 🚗 Sample Cars Data
const cars = [
  {
    id: 1,
    image: "/car1.jpg",
    model: "Tesla Model S Plaid",
    year: 2025,
    price: "$129,990",
    speed: "0-60 mph in 1.99s",
  },
  {
    id: 2,
    image: "/car2.jpg",
    model: "Porsche Taycan Turbo S",
    year: 2024,
    price: "$185,000",
    speed: "0-60 mph in 2.4s",
  },
  {
    id: 3,
    image: "/car3.jpg",
    model: "Lamborghini Revuelto",
    year: 2025,
    price: "$600,000",
    speed: "0-60 mph in 2.5s",
  },
];

const CarSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = cars.length;

  // ⏳ Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      {/* 🔄 Slides Container */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence>
          <motion.div
            key={cars[current].id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full"
          >
            {/* 🏎️ Car Image */}
            <img
              src={cars[current].image}
              alt={cars[current].model}
              className="w-full h-full object-cover rounded-lg"
            />
            
            {/* 📜 Car Details Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white p-4 rounded-b-lg">
              <h3 className="text-lg sm:text-xl font-semibold">{cars[current].model}</h3>
              <p className="text-sm sm:text-base">{cars[current].year} • {cars[current].speed}</p>
              <p className="text-md font-bold">{cars[current].price}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ◀️ Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* ▶️ Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        <FaChevronRight size={20} />
      </button>

      {/* ⚫ Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {cars.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-500"
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarSlider;