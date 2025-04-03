import CarListingCard from "./CarListingCard";

const CarListingGrid = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6"></h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CarListingCard />
        <CarListingCard />
        <CarListingCard />
        <CarListingCard />
        <CarListingCard />
        <CarListingCard />
        <CarListingCard />
        <CarListingCard />
      </div>
    </div>
  );
};

export default CarListingGrid;