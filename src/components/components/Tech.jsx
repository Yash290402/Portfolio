import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWapper } from '../../hoc';
import { technologies } from '../../constants';
import { services } from '../../constants';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { styles } from '../../style';

// ServiceCard Component
// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className="w-full">
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary rounded-[20px] py-8 px-10 min-h-[250px] flex justify-evenly items-center flex-col"
//       >
//         <img src={icon} alt={title} className="w-20 h-20 object-contain" />
//         <h3 className="text-white text-[22px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const Tech = () => {
  return (
    <>
    {/* Header */}
    <h2 className=" mg-0 text-center text-white text-[32px] font-semibold mb-10">
        Skills and Technology
      </h2>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWapper(Tech, "");
