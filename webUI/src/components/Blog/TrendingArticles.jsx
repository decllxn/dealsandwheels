import React from "react";
import { motion } from "framer-motion";
import { FaRegEye, FaClock } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "🚗 Top 10 Cars to Buy in 2025",
    image: "/testcar.jpg",
    views: "15.2K",
    readTime: "5 min read",
    excerpt: "Explore the best cars to invest in this year, from electric to luxury models.",
  },
  {
    id: 2,
    title: "🤖 The Future of AI in Car Auctions",
    image: "/testcar.jpg",
    views: "8.9K",
    readTime: "7 min read",
    excerpt: "How AI is revolutionizing the way we buy and sell cars at auctions.",
  },
  {
    id: 3,
    title: "⚡ Is Electric the Way Forward?",
    image: "/car3.jpg",
    views: "12.5K",
    readTime: "6 min read",
    excerpt: "Analyzing the shift towards EVs and what it means for car enthusiasts.",
  },
  {
    id: 4,
    title: "🔧 The Hidden Costs of Classic Car Restoration",
    image: "/car4.jpg",
    views: "10.1K",
    readTime: "4 min read",
    excerpt: "Restoring a classic car? Here's what they don’t tell you about the costs.",
  },
];

const TrendingArticles = () => {
  return (
    <div className="mt-12 w-full max-w-7xl mx-auto px-4">
      {/* Section Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-900"
      >
        🚀 Trending Articles
      </motion.h2>

      {/* Articles Grid (Responsive) */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <motion.div 
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: article.id * 0.2 }}
            className="relative bg-white border border-gray-200 shadow-lg p-5 rounded-xl overflow-hidden group transition-transform hover:scale-105 cursor-pointer"
          >
            {/* Article Image */}
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            </div>

            {/* Article Info */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {article.title}
              </h3>

              {/* Metadata */}
              <div className="flex items-center space-x-4 text-gray-600 text-sm mt-2">
                <div className="flex items-center">
                  <FaRegEye className="mr-1" /> {article.views}
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-1" /> {article.readTime}
                </div>
              </div>

              {/* Article Excerpt */}
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                {article.excerpt}
              </p>

              {/* Read More Button */}
              <button className="mt-4 inline-block text-blue-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrendingArticles;