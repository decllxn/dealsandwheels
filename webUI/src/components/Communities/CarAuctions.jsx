const CarAuctions = () => {
  const featuredCars = [
    { name: "Ferrari 488", price: "$250,000", img: "https://source.unsplash.com/700x400/?ferrari" },
    { name: "Lamborghini Huracan", price: "$280,000", img: "https://source.unsplash.com/700x400/?lamborghini" },
    { name: "Porsche 911 Turbo S", price: "$220,000", img: "https://source.unsplash.com/700x400/?porsche" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Featured Auctions</h2>
      <div className="space-y-4">
        {featuredCars.map((car, i) => (
          <div key={i} className="bg-gray-100 rounded-xl p-4">
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-40 object-cover rounded-xl mb-3"
            />
            <h3 className="font-semibold">{car.name}</h3>
            <p className="text-gray-500 text-sm">
              Starting at: <span className="font-bold text-gray-900">{car.price}</span>
            </p>
            <button className="w-full bg-blue-600 text-white py-3 rounded-full mt-3 hover:bg-blue-700 transition-colors duration-200">
              Place Bid
            </button>
          </div>
        ))}
      </div>
      <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-full mt-6 hover:bg-gray-300 transition-colors duration-200">
        Browse More Auctions
      </button>
    </div>
  );
};

export default CarAuctions;