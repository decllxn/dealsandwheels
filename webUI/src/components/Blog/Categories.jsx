import React from "react";
import { motion } from "framer-motion";

const categories = [
  { name: "🚗 Car Reviews", slug: "car-reviews" },
  { name: "📈 Market Trends", slug: "market-trends" },
  { name: "🤖 AI in Automobiles", slug: "ai-in-auto" },
  { name: "⚡ Electric Cars", slug: "electric-cars" },
  { name: "🔧 Auction Tips", slug: "auction-tips" },
];

const Categories = () => {
  return (
    <div className="mt-10 w-full max-w-7xl mx-auto px-4">
      {/* Section Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-900"
      >
        📂 Categories
      </motion.h2>

      {/* Categories Grid (Responsive) */}
      <div className="mt-6 flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <motion.button
            key={category.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="px-6 py-3 rounded-full font-medium text-gray-900 bg-gray-100 border border-gray-300 shadow-md 
            hover:bg-blue-600 hover:text-white active:scale-95 transition-all duration-200"
          >
            {category.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Categories;