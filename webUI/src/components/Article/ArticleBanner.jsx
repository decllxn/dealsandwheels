import React from "react";

const ArticleBanner = ({ title, image, category, author, date, readTime }) => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
      {/* 🔥 Background Blur & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-lg scale-110"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* 📌 Main Content */}
      <div className="relative z-10 bg-whitep-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
        
        {/* 🖼️ Image */}
        <div className="w-full md:w-2/5 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-56 md:h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* 📝 Article Details */}
        <div className="flex-1 text-center md:text-left">
          <span className="text-sm uppercase font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
            {category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2 leading-tight">
            {title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            By <span className="font-semibold">{author}</span> | {date} | {readTime} min read
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleBanner;