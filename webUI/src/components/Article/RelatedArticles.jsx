import React from "react";
import { motion } from "framer-motion";

const relatedArticles = [
  {
    id: 1,
    title: "🤖 How AI is Revolutionizing Car Auctions",
    image: "/testcar.jpg",
    category: "Tech & AI",
    readTime: "5 min read",
    views: "8.2K",
  },
  {
    id: 2,
    title: "🔑 Top 10 Tips for Buying Cars at Auctions",
    image: "/related-2.jpg",
    category: "Auction Tips",
    readTime: "6 min read",
    views: "12.1K",
  },
  {
    id: 3,
    title: "⚡ The Rise of Electric Cars in 2025",
    image: "/related-3.jpg",
    category: "EV Market",
    readTime: "7 min read",
    views: "15.4K",
  },
];

const RelatedArticles = () => {
  return (
    <div className="mt-12 w-full max-w-7xl mx-auto px-4">
      {/* Section Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        🔗 Related Articles
      </motion.h2>

      {/* Articles List */}
      <div className="mt-6 space-y-6">
        {relatedArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition">
                {article.title}
              </h3>

              {/* Meta Info */}
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2">
                <span className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-white px-2 py-1 rounded-md text-xs">{article.category}</span>
                <span className="ml-2">{article.readTime} •</span>
                <span className="ml-1">{article.views} views</span>
              </div>

              {/* Read More Button */}
              <button className="mt-3 text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
