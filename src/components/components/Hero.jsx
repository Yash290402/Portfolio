import React from 'react';
import { useParallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { styles } from '../../style';

// Service card component
const ServiceCard = ({ title, description, icon, gradientFrom, gradientTo }) => (
  <motion.div
    variants={{
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Faster transition
      whileHover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)", rotate: 2, transition: { duration: 0.2 } }, // Faster hover effect
    }}
    whileHover="whileHover"
    className={`service-card bg-gradient-to-r from-${gradientFrom} to-${gradientTo} text-white rounded-lg p-6 shadow-lg transform hover:-translate-y-2 transition-all duration-300`}
  >
    <div className="icon mb-4 text-3xl bg-white bg-opacity-20 rounded-full p-4 inline-flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-200">{description}</p>
  </motion.div>
);

const Hero = () => {
  const parallax = useParallax({ speed: window.innerWidth > 768 ? -5 : 0 });

  // Motion variants for animation
  const headingVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }, // Faster duration
  };

  const paragraphVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1 } }, // Faster duration
  };

  return (
    <section
      id="hero"
      ref={parallax.ref}
      className="hero-section bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-10 lg:px-20"
    >
      {/* Hero Text */}
      <motion.div
        variants={headingVariants}
        initial="initial"
        animate="animate"
        className="text-center text-white mb-6 sm:mb-8 md:mb-12"
      >
        <h1 className={styles.heroHeadText}>Welcome to My Creative Space</h1>
        <motion.p
          variants={paragraphVariants}
          initial="initial"
          animate="animate"
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mt-2 sm:mt-4"
        >
          A blend of innovative design and technology to bring ideas to life.
        </motion.p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial="initial"
        animate="animate"
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8"
      >
        {/* Service Cards */}
        <ServiceCard
          title="Frontend Development"
          description="Building modern, responsive, and user-friendly interfaces with React and other frontend technologies."
          icon="💻"
          gradientFrom="indigo-500"
          gradientTo="purple-600"
        />
        <ServiceCard
          title="Backend Development"
          description="Developing efficient, secure backend systems with Node.js, Express, and databases like MongoDB and MySQL."
          icon="⚙️"
          gradientFrom="blue-500"
          gradientTo="teal-600"
        />
        <ServiceCard
          title="Database Management"
          description="Creating and managing scalable, high-performance databases for efficient data handling."
          icon="🗄️"
          gradientFrom="green-500"
          gradientTo="yellow-600"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
