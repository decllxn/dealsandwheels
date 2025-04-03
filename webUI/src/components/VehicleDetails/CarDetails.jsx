import React, { useState } from "react";
import CarImageGallery from "./CarImageGallery";
import CarAuctionDetails from "./CarAuctionDetails";
import CarSpecifications from "./CarSpecifications";
import SidebarListings from "./SidebarListings";
import DataShowcase from "./DataShowcase";
import CarWalkaroundVideo from "./CarWalkaroundVideo";
import CarHeader from "./CarHeader";
import StickyBidBar from "./StickyBidBar";
import CommentSection from "./CommentSection";
import VehicleAuctionInfo from "./VehicleAuctionInfo"; // Import the VehicleAuctionInfo component

const carDetails = {
  images: [
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
  ],
  highestBid: 4500000,
  bidCount: 14,
  auctionEndTime: new Date().getTime() + 86400000,
  specifications: {
    Make: "Mercedes",
    Model: "C-Class",
    Transmission: "5 Speed Auto",
    Engine: "2.0L Turbo",
    Fuel: "Petrol",
    Mileage: "45,000 km",
  },
  sidebarListings: [
    { id: 1, image: "https://via.placeholder.com/200x150", make: "Toyota", model: "Supra", timeLeft: "2h 30m" },
  ],
};

const CarDetails = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "JohnDoe",
      profilePic: "https://via.placeholder.com/40x40",
      text: "Great car!",
      likes: 10,
      views: 100,
      timestamp: new Date(),
      replies: [
        {
          id: 2,
          user: "JaneSmith",
          profilePic: "https://via.placeholder.com/40x40",
          text: "I agree!",
          likes: 5,
          views: 50,
          timestamp: new Date(),
        },
      ],
      isSellerComment: true,
      externalLink: "https://www.example.com",
    },
  ]);

  const handleAddComment = (newComment) => {
    setComments([...comments, { ...newComment, id: Date.now(), timestamp: new Date() }]);
  };

  const handleAddToWatchlist = () => {
    console.log("Added to watchlist");
  };

  const handleShare = () => {
    console.log("Shared");
  };

  const handleRate = (rating) => {
    console.log("Rated:", rating, "stars");
  };

  return (
    <div className="container mx-auto px-4 py-10 mt-10">
      <CarHeader
        year="2023"
        make="Toyota"
        model="Camry"
        description="A reliable and efficient sedan."
        onAddToWatchlist={handleAddToWatchlist}
        onShare={handleShare}
        onRate={handleRate}
      />
      <CarImageGallery images={carDetails.images} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <CarAuctionDetails {...carDetails} />
          <StickyBidBar timeLeft="3 Days" highBid={169169} bids={9} comments={6} />
          <CarSpecifications details={carDetails.specifications} />
          <DataShowcase
            title="Car Overview"
            sections={[
              { title: "Highlights", content: ["This is a placeholder highlight.", "Another key point goes here."] },
              { title: "Equipment", content: ["Feature 1", "Feature 2", "Feature 3"] },
              { title: "Modifications", content: ["Custom exhaust system", "Performance tune"] },
              { title: "Known Flaws", content: ["Minor scratches", "Some interior wear"] },
            ]}
          />
          <div>
            <CarWalkaroundVideo videoUrl="/path/to/your/video.mp4" />
          </div>
          <CommentSection comments={comments} onAddComment={handleAddComment} />
          <VehicleAuctionInfo
            vehicleName="2023 Toyota Camry Auction"
            currentBid="$45,000"
            bidderName="Bidder123"
            sellerName="AutoSeller"
            endingTime="Wed, Apr 3 7:00 PM"
            bidCount="8"
            viewCount="9,250"
            placeBidLink="/place-bid"
            watchAuctionLink="/watch-auction"
            notifyLink="/notify-me"
          />
        </div>
        <SidebarListings title="Auctions Ending Soon" listings={carDetails.sidebarListings} />
      </div>
    </div>
  );
};

export default CarDetails;