import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
  FaCopy,
} from "react-icons/fa";

const SocialSharing = () => {
  const currentURL = window.location.href; // Get the current article URL
  const [copied, setCopied] = useState(false);

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentURL}&text=Check%20out%20this%20article!`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`,
    whatsapp: `https://api.whatsapp.com/send?text=${currentURL}`,
    telegram: `https://t.me/share/url?url=${currentURL}&text=Check%20this%20out!`,
    email: `mailto:?subject=Check%20this%20out!&body=${currentURL}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">📢 Share this Article</h3>
      
      <div className="flex flex-wrap gap-3">
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-btn bg-[#1877F2]">
          <FaFacebook size={18} />
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-btn bg-[#1DA1F2]">
          <FaTwitter size={18} />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn bg-[#0077B5]">
          <FaLinkedin size={18} />
        </a>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="social-btn bg-[#25D366]">
          <FaWhatsapp size={18} />
        </a>
        <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="social-btn bg-[#0088cc]">
          <FaTelegramPlane size={18} />
        </a>
        <a href={socialLinks.email} className="social-btn bg-gray-500">
          <FaEnvelope size={18} />
        </a>

        {/* 📋 Copy Link Button with Tooltip */}
        <button onClick={copyToClipboard} className="social-btn bg-gray-600 relative">
          <FaCopy size={18} />
          {copied && (
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
              Copied!
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SocialSharing;