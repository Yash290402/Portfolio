import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../../style'
import { services } from '../../constants'
import { SectionWapper } from '../../hoc'
import { fadeIn, textVariant } from '../../utils/motion'

// Placeholder resume link
const resumeLink = 'public/AIIE ICT 2021-25 YASH PATEL external.pdf';  // Replace with actual path

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in
        JavaScript and expertise in frameworks like React, Node.js, and Express.js.
        I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/* Resume Buttons */}
      <div className='mt-8 flex gap-4'>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <button className='px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300'>
            Show Resume
          </button>
        </a>
        <a href={resumeLink} download="Your_Resume.pdf">
          <button className='px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300'>
            Download Resume
          </button>
        </a>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWapper(About, "about");
