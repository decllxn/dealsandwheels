import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaEye, FaCommentDots } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

// Placeholder Blog Data
const blogs = [
    {
        id: 1,
        image: '/testcar.jpg',
        title: 'The Future of Electric Vehicles in Africa',
        topComment: 'This article changed my perspective on EV adoption!',
        views: 1200,
        likes: 340,
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/400x250',
        title: 'How AI is Transforming the Car Auction Industry',
        topComment: 'AI-powered pricing is a game changer!',
        views: 850,
        likes: 210,
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/400x250',
        title: 'Tips for First-Time Car Auction Buyers',
        topComment: 'Very helpful tips, I just bought my first car!',
        views: 1560,
        likes: 430,
    },
    {
        id: 4,
        image: 'https://via.placeholder.com/400x250',
        title: 'Another Interesting Article',
        topComment: 'I learned so much from this!',
        views: 975,
        likes: 285,
    },
    {
        id: 5,
        image: 'https://via.placeholder.com/400x250',
        title: 'Car Maintenance 101',
        topComment: 'A must read for every car owner.',
        views: 1120,
        likes: 367,
    },
    {
        id: 6,
        image: 'https://via.placeholder.com/400x250',
        title: 'The Rise of Online Car Auctions',
        topComment: 'The convenience is unbeatable.',
        views: 1480,
        likes: 412,
    },
];

const BlogPreview = () => {
    return (
        <section className="py-16 bg-[#1f1f1f]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                    Latest from Our Blog
                </h2>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Link
                            key={blog.id}
                            to={`/blog/${blog.id}`}
                            className={twMerge(
                                "group block bg-white rounded-lg overflow-hidden transition-all duration-300",
                                "shadow-md hover:shadow-lg border border-gray-800/10",
                                "hover:border-gray-700/50"
                            )}
                        >
                            {/* Blog Image */}
                            <div className="relative">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-64 object-cover transition-all duration-300"
                                    
                                />
                                 <div className="absolute inset-0 bg-black/0
                                            group-hover:bg-gradient-to-t from-black/80 to-transparent
                                            transition-all duration-300" />
                            </div>

                            {/* Blog Details */}
                            <div className="p-6">
                                <h3
                                    className={twMerge(
                                        "text-xl font-semibold text-gray-900 transition-colors duration-300",
                                        "group-hover:text-blue-400 line-clamp-2"
                                    )}
                                >
                                    {blog.title}
                                </h3>

                                {/* Top Comment */}
                                <p className="text-gray-500 text-sm italic mt-3 line-clamp-2">
                                    <FaCommentDots className="inline text-gray-400 mr-2" size={16} />
                                    <span className="font-serif">
                                        &ldquo;{blog.topComment}&rdquo;
                                    </span>
                                </p>

                                {/* Stats (Views & Likes) */}
                                <div className="flex justify-between items-center mt-5 text-gray-400 text-sm">
                                    <div className="flex items-center">
                                        <FaEye className="mr-2 text-blue-400" size={16} />
                                        <span className="font-medium">{blog.views.toLocaleString()}</span>
                                        <span className="ml-1">Views</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaHeart className="mr-2 text-red-400" size={16} />
                                        <span className="font-medium">{blog.likes.toLocaleString()}</span>
                                        <span className="ml-1">Likes</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;