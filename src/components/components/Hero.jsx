import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // State to track image loading status
  const [loading, setLoading] = useState(true);

  // Track the loading status of each image
  const floatingImages = useMemo(() => [
    { src: "src/assets/assets/tech/javascript.png", alt: "tech background 1", x: ["0%", "500%", "-50%"], y: ["0%", "120%", "-120%"] },
    { src: "src/assets/assets/tech/nodejs.png", alt: "tech background 2", x: ["0%", "-500%", "150%"], y: ["0%", "-130%", "130%"] },
    { src: "src/assets/assets/tech/reactjs.png", alt: "tech background 3", x: ["0%", "180%", "-90%"], y: ["0%", "-100%", "200%"] },
    { src: "src/assets/assets/tech/redux.png", alt: "tech background 4", x: ["0%", "-200%", "170%"], y: ["0%", "20%", "-65%"] },
    { src: "src/assets/assets/tech/git.png", alt: "tech background 5", x: ["0%", "-120%", "150%"], y: ["0%", "150%", "-120%"] },
    { src: "src/assets/assets/tech/mongodb.png", alt: "tech background 6", x: ["0%", "120%", "-250%"], y: ["0%", "-250%", "120%"] },
    { src: "src/assets/assets/tech/tailwind.png", alt: "tech background 7", x: ["0%", "80%", "-250%"], y: ["0%", "-250%", "80%"] },
    { src: "src/assets/assets/tech/css.png", alt: "tech background 8", x: ["0%", "-150%", "-250%"], y: ["0%", "-250%", "150%"] },
  ], []);

  // Function to handle image load events
  const handleImageLoad = () => {
    // Check if all images are loaded, if yes, set loading to false
    const loadedImages = floatingImages.filter(img => img.isLoaded).length;
    if (loadedImages === floatingImages.length) {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Mark images as not loaded initially
    floatingImages.forEach((image) => image.isLoaded = false);
  }, [floatingImages]);

  const imageMotionConfig = {
    initial: { x: "0%", y: "0%", scale: 1 },
    animate: { scale: [1, 0.95, 1] },
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-gray-800 to-black overflow-hidden flex items-center justify-center">
      {/* Loading Animation */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="spinner-border animate-spin w-16 h-16 border-4 border-t-transparent border-indigo-500 rounded-full"></div>
        </div>
      )}

      {/* Floating Background Images */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-30"
        style={{ pointerEvents: "none", willChange: "transform" }}
      >
        {floatingImages.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            className="absolute w-[150px] h-[150px] object-contain"
            initial={imageMotionConfig.initial}
            animate={{ ...imageMotionConfig.animate, x: image.x, y: image.y }}
            transition={imageMotionConfig.transition}
            loading="lazy"
            onLoad={() => {
              image.isLoaded = true;
              handleImageLoad();
            }}
            style={{ willChange: "transform, opacity" }}
          />
        ))}
      </motion.div>

      {/* Main Hero Content */}
      {!loading && (
        <div className="relative z-10 text-center max-w-lg mx-auto text-white">
          {/* Title with Minimal Look */}
          <motion.h1
            className="text-5xl sm:text-6xl font-light tracking-tight"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Hi, I'm <span className="font-semibold">Yash Patel</span>
          </motion.h1>

          {/* Subtitle with subtle animation */}
          <motion.p
            className="mt-6 text-lg sm:text-xl text-gray-300 font-light opacity-80"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            Full-Stack Developer | Innovator | Problem Solver
          </motion.p>

          {/* Subtle Line */}
          <motion.div
            className="w-16 h-1 mt-6 bg-indigo-500 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          ></motion.div>

          {/* Minimal Learn More Button */}
          <motion.a
            href="#about"
            className="mt-10 inline-block py-2 px-6 bg-transparent border-2 border-indigo-500 text-indigo-500 font-semibold rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            About Me
          </motion.a>
        </div>
      )}
    </section>
  );
};

export default Hero;