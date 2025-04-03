import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="flex items-center justify-center w-14 h-14 bg-gray-200 dark:bg-gray-900 rounded-full border border-gray-400 dark:border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
    >
      {theme === "dark" ? (
        <i className="ri-sun-line text-yellow-400 text-3xl animate-spin-slow" />
      ) : (
        <i className="ri-moon-line text-gray-800 dark:text-gray-200 text-3xl" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;