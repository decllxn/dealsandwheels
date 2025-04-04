import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const FeaturedCars = () => {
  const [cars, setCars] = useState([]);
  const [carImages, setCarImages] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCars = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://127.0.0.1:8000/vehicles/api/');
        if (!response.ok) {
          throw new Error('Failed to fetch featured cars');
        }
        const data = await response.json();
        console.log("Featured Cars API Response:", data); // Inspect the data structure

        if (data && Array.isArray(data)) {
          setCars(data);
          const imagesData = {};
          for (const car of data) {
            try {
              const images = await fetchCarImages(car.id);
              imagesData[car.id] = images;
            } catch (imageError) {
              console.error('Failed to fetch images for car', car.id, imageError);
              imagesData[car.id] = [];
            }
          }
          setCarImages(imagesData);
        } else if (data && data.results && Array.isArray(data.results)) {
          // Handle potential paginated response
          setCars(data.results);
          const imagesData = {};
          for (const car of data.results) {
            try {
              const images = await fetchCarImages(car.id);
              imagesData[car.id] = images;
            } catch (imageError) {
              console.error('Failed to fetch images for car', car.id, imageError);
              imagesData[car.id] = [];
            }
          }
          setCarImages(imagesData);
        }
         else {
          console.error('Invalid API response format for featured cars:', data);
          setError('Failed to load featured cars due to an invalid response format.');
          setCars([]);
        }
      } catch (fetchError) {
        console.error('Error fetching featured cars:', fetchError);
        setError(fetchError.message);
        setCars([]);
      } finally {
        setLoading(false);
      }
    };

    const fetchCarImages = async (carId) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/vehicles/api/car_images/?car=${carId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch images for car ${carId}`);
        }
        const imageData = await response.json();
        return imageData;
      } catch (error) {
        console.error('Error fetching car images:', error);
        return [];
      }
    };

    getCars();
  }, []);

  if (loading) {
    return (
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[25px] sm:mt-[35px] lg:mt-[35px]">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
          Featured Cars
        </h2>
        <p className="text-center text-gray-600 text-lg italic">Loading featured cars...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[25px] sm:mt-[35px] lg:mt-[35px]">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
          Featured Cars
        </h2>
        <p className="text-center text-red-500 text-lg">Error loading featured cars: {error}</p>
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[25px] sm:mt-[35px] lg:mt-[35px]"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
          Featured Cars
        </h2>
        <div className="flex flex-col items-center justify-center py-10 rounded-lg bg-gray-100">
          <svg
            className="w-16 h-16 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            ></path>
          </svg>
          <p className="text-center text-gray-600 text-lg italic">
            No featured cars available at the moment. Please check back later.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[25px] sm:mt-[35px] lg:mt-[35px]">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
        Featured Cars
      </h2>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".custom-next-button",
          prevEl: ".custom-prev-button",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="relative"
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id} className="p-2">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              {/* Featured Image */}
              <img
                src={car.main_image}
                alt={`${car.make} ${car.model}`}
                className="w-full h-[400px] object-cover cursor-pointer"
                onClick={() => navigate(`/car-detail/${car.id}`)}
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = "/placeholder.png"; // Set a placeholder image
                }}
              />

              {/* Details Section */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {car.make} {car.model}
                  </h3>
                  <p className="text-gray-500">{car.year} | {car.body_style}</p>
                  <p className="text-gray-800 font-semibold text-lg mt-2">
                    Ksh {parseFloat(car.discount_price || car.price).toLocaleString()}
                  </p>
                  <p className="text-gray-600 mt-2 line-clamp-3">
                    {car.description}
                  </p>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => navigate(`/car-detail/${car.id}`)}
                  className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all"
                >
                  View Details
                </button>
              </div>

              {/* Additional Images */}
              <div className="hidden lg:grid grid-cols-2 gap-2 p-4">
                {(carImages[car.id] || []).slice(0, 4).map((img) => (
                  <img
                    key={img.id}
                    src={img.image}
                    alt="Additional"
                    className="w-full h-32 object-cover rounded-md"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/placeholder-small.png"; // Another placeholder
                    }}
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center mt-6">
          <button className="custom-prev-button text-gray-700 hover:text-blue-600 transition-colors">
            &larr; Previous
          </button>
          <button className="custom-next-button text-gray-700 hover:text-blue-600 transition-colors ml-4">
            Next &rarr;
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default FeaturedCars;