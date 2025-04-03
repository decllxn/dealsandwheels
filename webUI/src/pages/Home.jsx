import React from "react";
import Navbar from "../components/Weblayout/Navbar";
import FeaturedCars from "../components/Home/FeaturedCars";
import SearchFilterBar from "../components/Home/SearchFilterBar";
import CarListingGrid from "../components/Home/CarListingGrid";
import BlogPreview from "../components/Home/BlogPreview";
import CarsForSaleFilter from "../components/Home/CarsForSaleFilter";
import ListingGrid from "../components/Home/ListingGrid";
import WhyDealsAndWheels from "../components/Weblayout/WhyDealsAndWheels";
import Footer from "../components/Weblayout/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FeaturedCars />
      <SearchFilterBar />
      <CarListingGrid />
      <CarsForSaleFilter />
      <ListingGrid />
      <BlogPreview />
      <WhyDealsAndWheels />
      <Footer />
    </div>
  )
}

export default Home;