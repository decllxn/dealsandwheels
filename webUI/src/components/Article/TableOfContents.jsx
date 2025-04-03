import React, { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp, FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Icons for collapse

const TableOfContents = ({ sections = [] }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // 📌 Detect Screen Size for Responsive Layout
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🎯 Detect Active Section on Scroll
  useEffect(() => {
    if (!sections.length) return;

    const handleScroll = () => {
      let currentSection = null;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // ✅ Prevent Errors if No Sections
  if (!sections.length) {
    return null;
  }

  return (
    <>
      {/* 📌 Desktop Sidebar TOC */}
      {!isMobile && (
        <div
          className={`left-0 top-20 h-[calc(100vh-5rem)] transition-all duration-300  ${
            isCollapsed ? "w-16" : "w-64"
          }`}
        >
          <div className="relative h-full bg-white border-r border-gray-300 shadow-lg rounded-tr-lg rounded-br-lg p-4 flex flex-col">
            {/* 📌 Collapse Button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute -right-5 top-5 bg-white border shadow-md rounded-full p-2"
              aria-label="Toggle TOC"
            >
              {isCollapsed ? <FiChevronRight size={18} /> : <FiChevronLeft size={18} />}
            </button>

            {/* 📖 TOC Title */}
            {!isCollapsed && (
              <h3 className="text-lg font-semibold text-gray-800 mb-4">📖 Table of Contents</h3>
            )}

            {/* 📜 TOC List */}
            <ul className={`flex-1 space-y-3 overflow-y-auto pr-2 hide-scrollbar ${isCollapsed ? "hidden" : "block"}`}>
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`block text-gray-700 text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                      activeSection === section.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* 🔗 Quick Navigation (Only Visible When Collapsed) */}
            {isCollapsed && (
              <div className="flex flex-col items-center space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white transition"
                    title={section.title}
                  >
                    {section.title.charAt(0)}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 📱 Mobile TOC (Horizontal Scrollable Bar) */}
      {isMobile && (
        <div className={`fixed top-16 left-0 right-0 bg-white shadow-md border-b border-gray-300 p-2 z-30 transition-all duration-300 ${isCollapsed ? "h-12" : "h-auto"}`}>
          <div className="flex items-center justify-between">
            <div className={`flex space-x-2 overflow-x-auto hide-scrollbar ${isCollapsed ? "hidden" : "flex"}`}>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                    activeSection === section.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2"
              aria-label="Toggle TOC"
            >
              {isCollapsed ? <FiChevronDown size={20} /> : <FiChevronUp size={20} />}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TableOfContents;