import React from "react";
import { motion } from "framer-motion";

const FloatingButton = () => {
  const scrollToHero = () => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={scrollToHero}
      className="fixed bottom-6 right-6 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300"
      aria-label="Scroll to Hero Section"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <span className="text-2xl">↑</span>
    </motion.button>
  );
};

export default FloatingButton;
