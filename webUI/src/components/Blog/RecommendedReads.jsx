import React from "react";
import { motion } from "framer-motion";

const recommendedArticles = [
  {
    id: 1,
    title: "🚗 Why Used Cars Are More Expensive in 2025",
    image: "/testcar.jpg",
    category: "Market Trends",
    readTime: "6 min read",
    views: "10.8K",
  },
  {
    id: 2,
    title: "🔍 How to Spot a Good Deal in an Online Auction",
    image: "/testcar.jpg",
    category: "Auction Tips",
    readTime: "5 min read",
    views: "7.3K",
  },
];

const RecommendedReads = () => {
  return (
    <div className="mt-12 w-full max-w-7xl mx-auto px-4">
      {/* Section Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-900"
      >
        🤖 Recommended Reads
      </motion.h2>

      {/* Articles List */}
      <div className="mt-6 space-y-6">
        {recommendedArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
          >
            {/* Article Image */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-l-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>

            {/* Article Content */}
            <div className="p-5 flex-1">
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition">
                {article.title}
              </h3>

              {/* Meta Info */}
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-xs">{article.category}</span>
                <span className="ml-2">{article.readTime} •</span>
                <span className="ml-1">{article.views} views</span>
              </div>

              {/* Read More Button */}
              <button className="mt-3 text-blue-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedReads;