import React, { useState, useEffect } from "react";
import { FaSearchPlus, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const CarImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    if (isModalOpen) {
      const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") setIsModalOpen(false);
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isModalOpen]);

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    setModalIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setModalIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full my-8">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-2 md:gap-4"> {/* Reduced gap */}
        <div className="md:col-span-6 relative group">
          <img
            src="/testcar.jpg"
            alt="Selected Car"
            className="w-full aspect-video object-cover shadow-lg transition-transform duration-300 hover:scale-101"
          />
          <button
            onClick={() => openModal(images.indexOf(selectedImage))}
            className="absolute top-4 right-4 bg-black bg-opacity-70 p-3 transition hover:bg-opacity-100 rounded-lg"
          >
            <FaSearchPlus className="text-white text-xl" />
          </button>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 grid-rows-4 gap-2"> {/* Reduced gap */}
          {images.slice(0, 7).map((img, index) => (
            <img
              key={index}
              src="/testcar.jpg"
              alt={`Thumbnail ${index}`}
              className={`w-full aspect-[4/3] object-cover cursor-pointer transition-all duration-200 ${
                selectedImage === img ? "shadow-lg" : "hover:opacity-80"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
          <div
            onClick={() => openModal(0)}
            className="relative cursor-pointer flex items-center justify-center bg-black bg-opacity-60 hover:bg-opacity-80 text-white"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
            <span className="absolute text-lg font-semibold z-10">
              View All
            </span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-opacity"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-8 right-8 text-white text-4xl hover:scale-110 transition"
          >
            <FaTimes />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-8 text-white text-4xl hover:scale-110 transition"
          >
            <FaChevronLeft />
          </button>
          <img
            src={images[modalIndex]}
            alt="Car Image"
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl transition-transform duration-200 scale-100 hover:scale-105"
          />
          <button
            onClick={nextImage}
            className="absolute right-8 text-white text-4xl hover:scale-110 transition"
          >
            <FaChevronRight />
          </button>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {modalIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarImageGallery;