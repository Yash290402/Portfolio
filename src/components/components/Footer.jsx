import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-gray-900 to-black text-gray-300 py-10 px-6">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,256L48,234.7C96,213,192,171,288,170.7C384,171,480,213,576,229.3C672,245,768,235,864,213.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
        {/* Name & Tagline */}
        <motion.div
          className="text-white text-lg sm:text-xl font-semibold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Yash Patel
          <p className="text-sm text-gray-400">Full Stack Developer</p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="flex space-x-6 text-sm sm:text-base justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <a href="#about" className="hover:text-white transition-all">
            About
          </a>
          <a href="#experience" className="hover:text-white transition-all">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-all">
            Contact
          </a>
        </motion.div>

        {/* Social Media & Email */}
        <motion.div
          className="flex items-center space-x-8 justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yash-patel-587622302/"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-white transition-all"
            aria-label="LinkedIn"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="rounded-full p-2 bg-light-blue-500 group-hover:shadow-blue-400/80 shadow-lg"
            >
              <svg
                width="24"
                height="24"
                fill="#66B2FF" // Light blue color
                className="text-light-blue-500"
              >
                <path d="M4.98 3C3.34 3 2 4.34 2 5.98S3.34 9 4.98 9 8 7.66 8 5.98 6.62 3 4.98 3zM2 21h6v-9H2v9zm12-9h-5.74v9H14v-4.5c0-2.2 3-2.38 3 0V21h6v-5.9c0-5.5-6-5.3-6-2.6V12z" />
              </svg>
            </motion.div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Yash290402"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-gray-400 hover:text-white transition-all"
            aria-label="GitHub"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="rounded-full p-2 bg-gray-800 group-hover:shadow-gray-500/80 shadow-lg"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.388.6.11.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.746.082-.73.082-.73 1.204.085 1.838 1.234 1.838 1.234 1.07 1.834 2.807 1.304 3.49.998.107-.775.418-1.304.76-1.604-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.47-2.38 1.24-3.22-.124-.303-.537-1.523.117-3.176 0 0 1.01-.322 3.3 1.23.96-.267 1.985-.4 3.005-.405 1.02.005 2.045.138 3.005.405 2.29-1.552 3.3-1.23 3.3-1.23.656 1.653.244 2.873.12 3.176.77.84 1.24 1.91 1.24 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.815 1.102.815 2.22v3.293c0 .32.22.694.82.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </motion.div>
          </a>

          {/* Gmail */}
          {/* <a
            href="mailto:yash56774@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-white transition-all"
            aria-label="Gmail"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="rounded-full p-2 group-hover:shadow-red-400/80 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#EA4335" // Gmail's red color
              >
                <path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,5l-8,5L4,5H20z M4,19V7l8,5 l8-5v12H4z" />
              </svg>
            </motion.div>
          </a> */}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-8"></div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 mt-4">
        <p>© {new Date().getFullYear()} Yash Patel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
