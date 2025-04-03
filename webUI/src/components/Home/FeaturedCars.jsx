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

  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/vehicles/api/');
        if (!response.ok) {
          throw new Error('Failed to fetch featured cars');
        }
        const data = await response.json();
        setCars(data);

        const imagesData = {};
        for (const car of data) {
          try {
            const images = await fetchCarImages(car.id);
            imagesData[car.id] = images;
          } catch (error) {
            console.error('Failed to fetch images for car', car.id, error);
            imagesData[car.id] = [];
          }
        }
        setCarImages(imagesData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setCars([]);
      }
    };
    getCars();
  }, []);

  if (cars.length === 0) {
    return <p className="text-center text-gray-500 text-lg">No featured cars available.</p>;
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
                {(carImages[car.id] || []).slice(0, 4).map((img) => ( //added any
                  <img
                    key={img.id}
                    src={img.image}
                    alt="Additional"
                    className="w-full h-32 object-cover rounded-md"
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