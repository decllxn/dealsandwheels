import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Image,
  Film,
  Smile,
  Calendar,
  MapPin,
  MoreHorizontal,
} from "lucide-react";

const CommunityFeed = () => {
  const [newPostText, setNewPostText] = useState("");
  const [posts, setPosts] = useState([/* ... */]); // Your existing data

  const handlePostSubmit = () => { /* ... */ }; // Your existing logic

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="mb-6">
        <textarea
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
        <div className="flex justify-between items-center mt-3">
          <div className="flex space-x-3 text-gray-500">
            {[Image, Film, Smile, Calendar, MapPin].map((Icon, i) => (
              <button key={i} className="hover:text-blue-500 transition-colors duration-200">
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
          <button
            onClick={handlePostSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Post
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <div key={i} className="bg-gray-100 rounded-xl p-4">
            {/* Post content - your existing markup */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{post.avatar}</span>
                <div>
                  <h3 className="font-semibold">{post.name}</h3>
                  <p className="text-gray-500 text-sm">{post.time}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-800">{post.text}</p>
            {post.image && (
              <img
                src={post.image}
                alt=""
                className="w-full rounded-lg mt-3"
              />
            )}

            <div className="flex justify-between items-center text-gray-500 mt-3">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 hover:text-red-500 transition-colors duration-200">
                  <Heart className="w-5 h-5" /> <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors duration-200">
                  <MessageCircle className="w-5 h-5" /> <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-green-500 transition-colors duration-200">
                  <Share2 className="w-5 h-5" /> <span>{post.shares}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;