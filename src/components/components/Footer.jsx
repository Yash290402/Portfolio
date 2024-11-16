import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 sm:px-6 relative">
      
      {/* Wave Divider */}
      <div className="absolute inset-0 top-[-20px] bg-gradient-to-t from-gray-900 to-transparent h-8 opacity-80">
        <svg
          viewBox="0 0 1440 320"
          className="absolute inset-0 w-full h-full text-gray-900"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,202.7C672,213,768,203,864,181.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Left Side - Name */}
        <motion.div
          className="text-white font-medium text-lg sm:text-xl mb-4 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Yash Patel | Full Stack 
        </motion.div>

        {/* Center - Navigation Links */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-10 text-sm sm:text-base mb-4 md:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </motion.div>

        {/* Right Side - Social Links and Email */}
        <motion.div
          className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/yash-patel-587622302/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group text-gray-400 hover:text-white transition-colors">
            <motion.svg
              width="24"
              height="24"
              fill="currentColor"
              className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
            >
              <path d="M4.98 3C3.34 3 2 4.34 2 5.98S3.34 9 4.98 9 8 7.66 8 5.98 6.62 3 4.98 3zM2 21h6v-9H2v9zm12-9h-5.74v9H14v-4.5c0-2.2 3-2.38 3 0V21h6v-5.9c0-5.5-6-5.3-6-2.6V12z" />
            </motion.svg>
          </a>

          {/* GitHub Icon */}
          <a href="https://github.com/Yash290402" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group text-gray-400 hover:text-white transition-colors">
            <motion.svg
              width="24"
              height="24"
              fill="currentColor"
              className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.388.6.11.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.746.082-.73.082-.73 1.204.085 1.838 1.234 1.838 1.234 1.07 1.834 2.807 1.304 3.49.998.107-.775.418-1.304.76-1.604-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.47-2.38 1.24-3.22-.124-.303-.537-1.523.117-3.176 0 0 1.01-.322 3.3 1.23.96-.267 1.985-.4 3.005-.405 1.02.005 2.045.138 3.005.405 2.29-1.552 3.3-1.23 3.3-1.23.656 1.653.244 2.873.12 3.176.77.84 1.24 1.91 1.24 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.815 1.102.815 2.22v3.293c0 .32.22.694.82.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </motion.svg>
          </a>

          {/* Email */}
          <a href="mailto:your-email@example.com" className="text-gray-400 hover:text-white transition-colors text-sm">
           yash56774@gmail.com
          </a>
        </motion.div>
      </div>

      {/* Divider Line */}
      <motion.div
        className="w-full h-px bg-gray-600 mt-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />

      {/* Copyright */}
      <motion.div
        className="text-center text-xs text-gray-500 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p>© {new Date().getFullYear()} Yash. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
