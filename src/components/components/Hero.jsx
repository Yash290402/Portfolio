import React, { useState, useEffect } from 'react';
import { useParallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { styles } from '../../style';
import { services } from '../../constants';
import { Tilt } from 'react-tilt';
import { fadeIn } from '../../utils/motion';
import { StarsCanvas } from './canvas';

const Hero = () => {
  const [showText, setShowText] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0); // Track the current character index
  const typingText = "Full Stack Developer | MERN Stack Enthusiast "; 
  const typingSpeed = 100; // Speed in milliseconds

  const parallax = useParallax({ speed: window.innerWidth > 768 ? -5 : 0 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth <= 640) {
        if (!hasScrolled && currentScrollY > 50) {
          setShowText(false);
          setHasScrolled(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  // Typing effect
  useEffect(() => {
    if (index < typingText.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + typingText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [index, typingText]);

  const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[2px] rounded-[15px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[15px] py-4 px-6 sm:py-6 sm:px-8 min-h-[150px] sm:min-h-[200px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
          <h3 className="text-white text-[16px] sm:text-[18px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );

  return (
    <section
      id="hero"
      ref={parallax.ref}
      className="hero-section min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-10 lg:px-20"
    >
      

      {/* Hero Text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white mb-8 max-w-[90%] sm:max-w-[75%] lg:max-w-[60%]"
        >
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold font-teko 0 bg-clip-text"
          >
            {`Welcome to My Creative Space`.split(" ").map((word, idx) => (
              <motion.span
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block mx-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap overflow-hidden text-ellipsis">
            {typedText}
          </p>
        </motion.div>
      )}

      {/* Dropdown Arrow Icon */}
      <a href="#about" className="absolute bottom-10 sm:animate-bounce">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl hidden sm:block"
        >
          <FaArrowDown />
        </motion.div>
      </a>

      {/* Service Cards Section */}
      <div
        className={`mt-10 ${showText ? 'hidden sm:grid' : 'grid'} grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full`}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
