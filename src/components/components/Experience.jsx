import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../../style';
import { experiences } from '../../constants';
import { SectionWapper } from '../../hoc';
import { textVariant } from '../../utils/motion';

const ExperienceCard = ({ experience }) => {
  const handleCardClick = () => {
    window.open(experience.repoLink, '_blank');
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        cursor: 'pointer'
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      // icon={
      //   <div className="flex items-center justify-center w-full h-full">
      //     <img 
      //       src={experience.icon} 
      //       alt={`${experience.title} logo`} 
      //       className="w-[60%] h-[60%] object-contain" 
      //     />
      //   </div>}
      iconStyle={{ background: experience.iconBg }}
    >
      <div onClick={handleCardClick}>
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>

          {/* Render technology icons here */}
          <div className="flex space-x-2 mt-2">
            {Array.isArray(experience.technologies) && experience.technologies.map((tech, index) => (
              <img
                key={`tech-icon-${index}`}
                src={tech.icon}
                alt={tech.name}
                title={tech.name}  // Tooltip for the technology name
                className='w-6 h-6'
              />
            ))}
          </div>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>

        {/* Instruction to click for project */}
        <p className='text-secondary text-[14px] font-semibold mt-4'>
          Click the card to view project
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p id="experience" 
        className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          PROJECT
        </h2>
      </motion.div>

      <div 
        className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWapper(Experience, "work");
