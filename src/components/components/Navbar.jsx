import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../../style';
import { navLinks } from '../../constants';
import { menu, close } from '../../assets/assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Apply background after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${scrolled ? 'bg-[rgba(26, 26, 46, 0.9)] shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        
        {/* Centered Logo */}
        <Link
          to='/'
          className='text-[#B0B3C6] text-[20px] font-semibold cursor-pointer'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <span className='text-[#915EFF]'>Yash</span> | Full Stack Developer
        </Link>

        {/* Desktop Navigation Links */}
        <ul className='list-none hidden md:flex flex-row gap-8 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-[#B0B3C6]"
              } hover:text-[#915EFF] transition duration-300 text-[16px] font-light cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={() => setToggle(!toggle)}
            className='relative w-8 h-8 flex flex-col justify-between items-center rounded-full bg-[#1A1A2E] p-1 transition-all duration-300 shadow-md focus:outline-none'
          >
            <span className={`block w-6 h-0.5 bg-[#B0B3C6] transition-all duration-300 ${toggle ? 'transform rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#B0B3C6] transition-all duration-300 ${toggle ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#B0B3C6] transition-all duration-300 ${toggle ? 'transform -rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {toggle && (
          <div className='absolute top-16 right-0 w-full max-w-[240px] bg-[#1A1A2E] rounded-lg shadow-lg p-4 z-10 transition-all duration-300'>
            <ul className='flex flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-[#B0B3C6]"} hover:text-[#915EFF] transition duration-300`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
