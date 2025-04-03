import React, { useEffect } from "react";

const AdBanner = ({ slotId, format = "auto", fullWidth = false }) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense failed to load:", e);
    }
  }, []);

  return (
    <div className={`my-8 ${fullWidth ? "w-full" : "max-w-7xl mx-auto px-4"}`}>
      <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 flex items-center justify-center shadow-md">
        {/* Google AdSense Banner */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense Publisher ID
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
};

export default AdBanner;