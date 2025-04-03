import { useEffect, useState } from "react";
import { FaGlobe, FaHandshake, FaLightbulb, FaChartBar, FaRocket, FaCheckCircle } from "react-icons/fa";

const OurVision = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 500); // Trigger animation after mount
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 bg-white relative overflow-hidden">
      {/* Image Container */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        {/* Floating Icons Animation */}
        {[
          { icon: <FaGlobe />, delay: "0s", position: "top-4 left-10" },
          { icon: <FaHandshake />, delay: "1s", position: "top-10 right-4" },
          { icon: <FaChartBar />, delay: "2s", position: "bottom-4 left-12" },
          { icon: <FaLightbulb />, delay: "3s", position: "bottom-8 right-10" },
          { icon: <FaRocket />, delay: "4s", position: "top-14 left-20" },
          { icon: <FaCheckCircle />, delay: "5s", position: "top-8 right-16" },
        ].map((item, index) => (
          <span
            key={index}
            className={`absolute text-blue-500 text-3xl opacity-0 animate-floating-icons ${item.position}`}
            style={{ animationDelay: item.delay }}
          >
            {item.icon}
          </span>
        ))}

        {/* Rotating Dotted Border */}
        <div className="absolute w-full h-full rounded-full border-4 border-transparent">
          <div className="absolute inset-0 animate-rotating-border">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#1f1f1f" strokeWidth="3" strokeDasharray="8 10" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <img
          src="/testcar.jpg" // Replace with your image path
          alt="Our Vision"
          className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>

      {/* Text Container */}
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          To be the world's leading digital marketplace for car sales and auctions, fostering <span className="text-blue-500 font-semibold">trust</span> and <span className="text-blue-500 font-semibold">efficiency</span>.
        </p>

        {/* Animated Words */}
        <div className="mt-6 space-y-4">
          {[
            { text: "Global Reach", icon: <FaGlobe /> },
            { text: "Reliability", icon: <FaHandshake /> },
            { text: "Value Creation", icon: <FaChartBar /> },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 text-xl font-semibold text-gray-800 opacity-0 transform translate-y-4 transition-all duration-700 ${
                animate ? "opacity-100 translate-y-0 scale-110" : ""
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <span className="text-blue-500 text-3xl">{item.icon}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;