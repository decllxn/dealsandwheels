import React from "react";
import { motion } from "framer-motion";

const latestPosts = [
  {
    id: 1,
    title: "🚗 2025's Best Auctioned Cars: Top Picks",
    image: "/testcar.jpg",
    date: "March 28, 2025",
    views: "12.5K",
    readTime: "5 min read",
    excerpt: "Discover the best cars that went under the hammer in 2025 and why they stood out.",
  },
  {
    id: 2,
    title: "🤖 How AI is Changing the Auto Industry",
    image: "/testcar.jpg",
    date: "March 27, 2025",
    views: "8.9K",
    readTime: "7 min read",
    excerpt: "Explore how artificial intelligence is transforming auctions, pricing, and car recommendations.",
  },
  {
    id: 3,
    title: "⚡ Why Electric Cars Are Winning 2025",
    image: "/latest-car3.jpg",
    date: "March 26, 2025",
    views: "15.2K",
    readTime: "6 min read",
    excerpt: "EVs are dominating the market. Here's what makes them the top choice this year.",
  },
];

const LatestPosts = () => {
  return (
    <div className="mt-12 w-full max-w-7xl mx-auto px-4">
      {/* Section Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-900"
      >
        🆕 Latest Posts
      </motion.h2>

      {/* Posts Grid (Fully Responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {latestPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
          >
            {/* Post Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>

            {/* Post Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition">
                {post.title}
              </h3>

              {/* Meta Info */}
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <span>{post.date} • </span>
                <span className="ml-1">{post.readTime} • </span>
                <span className="ml-1">{post.views} views</span>
              </div>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
