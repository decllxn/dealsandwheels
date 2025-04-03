import React from "react";
import Navbar from "../components/Weblayout/Navbar";
import WhyDealsAndWheels from "../components/Weblayout/WhyDealsAndWheels";
import Footer from "../components/Weblayout/Footer";
import HeroSection from "../components/Blog/HeroSection";
import TrendingArticles from "../components/Blog/TrendingArticles";
import AdBanner from "../components/Blog/AdBanner";
import Categories from "../components/Blog/Categories";
import LatestPosts from "../components/Blog/LatestPosts";
import RecommendedReads from "../components/Blog/RecommendedReads";


const BlogHome = () => {
  return (
    <>
    <Navbar />
    <div className="bg-white min-h-screen">
      <HeroSection />
      <div className="max-w-7xl mx-auto p-4">
        <TrendingArticles />
        <AdBanner slotId="1234567890" format="rectangle" />
        <Categories />
        <LatestPosts />
        <RecommendedReads />
      </div>
    </div>
    <WhyDealsAndWheels />
    <Footer />
    </>
  );
};

export default BlogHome;