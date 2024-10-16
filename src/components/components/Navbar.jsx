import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../../style';
import { navLinks } from '../../constants';
import {  menu, close } from '../../assets/assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Yash&nbsp;
            <span className='sm:block hidden'>| Full Stack</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {/* LinkedIn Profile Link */}
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="https://www.linkedin.com/in/yash-patel-587622302/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          {/* GitHub Profile Link */}
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="https://github.com/Yash290402" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* LinkedIn Profile Link for Mobile View */}
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white">
                <a href="https://www.linkedin.com/in/yash-patel-587622302/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              {/* GitHub Profile Link for Mobile View */}
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white">
                <a href="https://github.com/Yash290402" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
