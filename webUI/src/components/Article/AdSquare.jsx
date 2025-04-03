import React, { useEffect } from "react";

const AdSquare = ({ slotId }) => {
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
    <div className="mt-6 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 flex items-center justify-center shadow-md">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "250px", height: "250px" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slotId}
      ></ins>
    </div>
  );
};

export default AdSquare;