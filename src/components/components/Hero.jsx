import React from 'react';
import { useParallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { styles } from '../../style';
import { services } from '../../constants';
import { Tilt } from 'react-tilt';
import { fadeIn } from '../../utils/motion';

const Hero = () => {
  const parallax = useParallax({ speed: window.innerWidth > 768 ? -5 : 0 });

  const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[2px] rounded-[15px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[15px] py-6 px-8 min-h-[200px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );

  return (
    <section
      id="hero"
      ref={parallax.ref}
      className="hero-section bg-cover bg-no-repeat bg-center min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-10 lg:px-20"
      style={{
        backgroundImage: "url('public/use-svg-as-background-image-particle-strokes.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-white mb-8 max-w-[90%] sm:max-w-[75%] lg:max-w-[60%]"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">
          Welcome to My Creative Space
        </h1>
        <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap overflow-hidden text-ellipsis">
          A blend of innovative design and technology to bring ideas to life.
        </p>
      </motion.div>

      {/* Dropdown Arrow Icon with Animation (Hidden on Mobile) */}
      <a
        href="#services"
        className="absolute bottom-10 hidden sm:block animate-bounce"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl"
        >
          <FaArrowDown />
        </motion.div>
      </a>

      {/* Service Cards Section (Hidden on Mobile) */}
      <div className="mt-10 hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
