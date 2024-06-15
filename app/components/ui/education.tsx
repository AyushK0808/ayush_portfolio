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
  grade: string;
  details: string;
}

const Details: React.FC<DetailsProps> = ({ std, institute, from, to, grade, details }) => {
  const ref= useRef(null);
  return (
    <li ref={ref} className='my-8 first: mt-0 last: mb-0 w-[60%] mx-auto flex flex-col items-center justify-betweeen'>
      <Li_Icon/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:'spring'}}
      >
        <h3 className='capitalize font-bold text-2xl'>{std} : {institute}</h3>
        <span className='capitalize font-medium'>
          {from} - {to} | Grade: {grade}
        </span>
        <p className=' w-full font-extralight'>{details}</p>
        <br/>
      </motion.div>
    </li>
  );
};

const educationData = [
  {
    std: 'Grade 10',
    institute: 'Delhi Public School, Hyderabad',
    from: '2008',
    to: '2020',
    grade: '95.8%',
    details: 'Achieved top grades in all subjects, with a strong focus on Mathematics and Science.'
  },
  {
    std: 'Grade 12',
    institute: 'Fiitjee Junior College, Narayanguda, Hyderabad',
    from: '2020',
    to: "2022",
    grade: '96.6%',
    details: 'Specialized in Science stream, with excellent performance in Physics, Chemistry, and Mathematics.'
  },
  {
    std: 'Bachelor of Technology (B.Tech in CSE)',
    institute: 'Vellore Institute of Technology, Vellore, Tamil Nadu',
    from: '2022',
    to: '2026(expected)',
    grade: '9.2 CGPA (upto 4th semester)',
    details: 'Completed Bachelor of Technology in Computer Science with a focus on Software Development and Machine Learning.'
  }
];

const Education: React.FC = () => {
  const ref = React.useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ['start end', 'center start']
    }
  );
  return (
    <div className='my-40'>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div 
         style={{scaleY: scrollYProgress}}
        
        className='absolute left-9 top-0 w-[4px] h-full bg-white origin-top '/>
          <ul className='w-full flex flex-col items-start justify-between ml-4'>
          {educationData.map((edu, index) => (
            <Details
              key={index}
              std={edu.std}
              institute={edu.institute}
              from={edu.from}
              to={edu.to}
              grade={edu.grade}
              details={edu.details}
            />
          ))}
        </ul>
        
        
      </div>
    </div>
  );
};

export default Education;
