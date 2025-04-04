import React, { useState, useEffect } from "react"; // Import useState and useEffect from React
import { Link, useSearchParams } from "react-router-dom"; // Keep Link and useSearchParams import
import { fetchAuctions } from "../../api";
import CarListingCard from "./CarListingCard";

const CarListingGrid = () => {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchFilteredAuctions = async () => {
      setLoading(true);
      setError(null);
      const query = searchParams.get("query") || "";
      const params = {};
      searchParams.forEach((value, key) => {
        if (key !== "query") {
          params[key] = value;
        }
      });

      try {
        const data = await fetchAuctions(query, params);
        setAuctions(data.results || []); // Assuming your backend paginates and returns 'results'
      } catch (err) {
        setError(err.message || "Failed to fetch auctions.");
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredAuctions();
  }, [searchParams]);

  if (loading) {
    return <div className="max-w-[1600px] mx-auto px-6 py-10">Loading auctions...</div>;
  }

  if (error) {
    return <div className="max-w-[1600px] mx-auto px-6 py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Auctions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {auctions.map((auction) => (
          <CarListingCard key={auction.id} car={auction} />
        ))}
        {auctions.length === 0 && !loading && <p>No auctions found matching your criteria.</p>}
      </div>
    </div>
  );
};

export default CarListingGrid;