import React, { useState } from "react";
import Navbar from "../components/Weblayout/Navbar";
import CommunitiesHeader from "../components/Communities/CommunitiesHeader";
import CommunitiesList from "../components/Communities/CommunitiesList";
import CommunityFeed from "../components/Communities/CommunityFeed";
import CarAuctions from "../components/Communities/CarAuctions";
import WhyDealsAndWheels from "../components/Weblayout/WhyDealsAndWheels";
import Footer from "../components/Weblayout/Footer";
import MobileCommunitiesList from "../components/Communities/MobileCommunitiesList"; // Import the new component

const CommunitiesPage = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  const handleCommunitySelect = (communityName) => {
    setSelectedCommunity(communityName);
  };

  return (
    <div className="bg-gray-50 min-h-screen mt-10">
      <Navbar />

      <main className="mt-[var(--navbar-height)] p-4 md:p-6 lg:p-8">
        <CommunitiesHeader />

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mt-6">
          {/* Communities List (Horizontal on small screens, Vertical on large) */}
          <section className="w-full lg:w-1/4">
            {/* Conditional rendering based on screen size */}
            <div className="hidden lg:block">
              <CommunitiesList onCommunitySelect={handleCommunitySelect} />
            </div>
            <div className="lg:hidden">
              <MobileCommunitiesList onCommunitySelect={handleCommunitySelect} />
            </div>
          </section>

          {/* Community Feed (Conditional based on selected community) */}
          <section className="flex-1">
            {selectedCommunity ? (
              <CommunityFeed communityName={selectedCommunity} />
            ) : (
              <div className="text-center text-gray-600 p-8">
                Select a community to view its feed.
              </div>
            )}
          </section>

          {/* Car Auctions (Sidebar on large screens) */}
          <aside className="lg:w-1/4">
            <CarAuctions />
          </aside>
        </div>
      </main>

      <WhyDealsAndWheels />
      <Footer />
    </div>
  );
};

export default CommunitiesPage;