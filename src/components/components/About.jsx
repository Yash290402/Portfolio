import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../../style';

import { SectionWapper } from '../../hoc';
import { fadeIn, textVariant } from '../../utils/motion';
import { FaDownload } from 'react-icons/fa';


const resumeLink = 'public/AIIE ICT 2021-25 YASH PATEL external.pdf';  // Replace with actual path
const Profilepic ='public/Profilepic.png'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-10">
      {/* Left Section - About Text and Skills */}
      <motion.div variants={textVariant()} className="flex-1">
        <p className={`${styles.sectionSubText} text-6xl font-bold`}>Introduction</p>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a skilled software developer with experience in 
          <span className="text-2xl font-normal text-[#915EFF]"> JavaScript</span> and 
          expertise in frameworks like 
          <span className="text-2xl font-normal text-[#915EFF]"> React.js</span>, 
          <span className="text-2xl font-normal text-[#915EFF]"> Node.js</span>, and 
          <span className="text-2xl font-normal text-[#915EFF]"> Express.js</span>. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        {/* Resume Buttons */}
        <div className="mt-8 flex gap-4">
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 bg-[#915EFF] text-white rounded-md hover:bg-[#271440] transition duration-300 font-semibold">
              Show Resume
            </button>
          </a>
          <a href={resumeLink} download="Your_Resume.pdf">
            <button className="p-3 bg-transparent rounded-full hover:bg-transparent transition duration-300 hover:bg-[#271440]">
              <FaDownload className="text-white" size={18} />
            </button>
          </a>
        </div>

        {/* Service Cards Section
        <div className="mt-10 flex flex-wrap gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div> */}
      </motion.div>

      {/* Right Section - Profile Picture */}
      <motion.div
        className="md:w-[250px] w-full flex-shrink-0 flex justify-center items-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Tilt className="rounded-full overflow-hidden shadow-lg w-48 h-48 md:w-60 md:h-60">
          <img src={Profilepic} alt="Your Profile" className="w-full h-full object-cover" />
        </Tilt>
      </motion.div>
    </div>
  );
};

export default SectionWapper(About, "about");
