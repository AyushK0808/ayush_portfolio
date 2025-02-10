"use client"

import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import Li_Icon from './li-icon';

interface DetailsProps {
  std: string;
  institute: string;
  from: string;
  to: string;
  details: string;
}

const Details: React.FC<DetailsProps> = ({ std, institute, from, to, details }) => {
  const ref= useRef(null);
  return (
    <li ref={ref} className='w-full md:w-4/5 mx-auto flex flex-col justify-betweeen pl-8 md:pl-0'>
      <Li_Icon/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:'spring'}}
      className='ml-4 md:ml-0'
      >
        <h3 className='capitalize font-bold text-lg md:text-2xl'>{std} : {institute}</h3>
        <span className='capitalize font-medium text-sm md:text-base'>
          {from} - {to}
        </span>
        <p className=' w-full font-extralight text-sm md:text-base pr-4'>{details}</p>
        <br/>
      </motion.div>
    </li>
  );
};

const empData = [
  {
    std: 'Algorithm Intern',
    institute: 'Titan Smart Labs - Hyderabad',
    from: 'June 2024',
    to: 'Present',
    details: 'Worked on data collection and preprocessing. Additionally, worked in the development of algorithms to classify sleep and stress on a product launched by the company commercially. '
  }
];

const Experience: React.FC = () => {
  const ref = React.useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ['start end', 'center start']
    }
  );
  return (
    <div className='my-10 md:my-40'>
      <div ref={ref} className='w-full md:w-3/4 mx-auto relative'>
        <motion.div 
         style={{scaleY: scrollYProgress}}
        
        className='absolute left-5 md:left-9 top-0 w-[3px] md:w-[4px] h-full bg-gradient-to-b from-purple-200 to-purple-700 origin-top '/>
          <ul className='w-full flex flex-col items-start justify-between gap-8'>
          {empData.map((edu, index) => (
            <Details
              key={index}
              std={edu.std}
              institute={edu.institute}
              from={edu.from}
              to={edu.to}
              details={edu.details}
            />
          ))}
        </ul>
        
        
      </div>
    </div>
  );
};

export default Experience;
