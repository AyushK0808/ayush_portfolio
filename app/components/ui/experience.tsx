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
    <li ref={ref} className='w-3/5 mx-auto flex flex-col justify-betweeen'>
      <Li_Icon/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:'spring'}}
      >
        <h3 className='capitalize font-bold text-2xl'>{std} : {institute}</h3>
        <span className='capitalize font-medium'>
          {from} - {to}
        </span>
        <p className=' w-full font-extralight'>{details}</p>
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
  },
  {
    std: 'Under Secretary General - Technology',
    institute: 'VIT Model United Nations Society- Vellore',
    from: 'January 2024',
    to: "April 2024",
    
    details: 'As the Under Secretary General - Technology for VITMUN 24, I was incharge of handling the technical aspects of the conference such as making the website for the event. Additionally, I was an active member in the Registrations department which helped in making the event a grand success'
  },
  {
    std: 'Core Committee Member',
    institute: 'VInnovateIT -VIT Vellore',
    from: 'May 2023',
    to: '',
    
    details: 'Active member in both the technical domain(ML,Web,cc) and management.Assisted in promotion drives of apps such as MessIT with more than 10,000concurrent users Contributed to multiple projects involving Generative AI andfull stack development'
  },
  {
    std: 'Software Lead',
    institute: 'Team Ardra: VIT Vellore',
    from: 'May 2023',
    to: '',
    
    details: 'Actively helped in outreach activities and worked on machine learning tasks to automate drone functionalities.'
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
    <div className='my-40'>
      <div ref={ref} className='w-3/4 mx-auto relative'>
        <motion.div 
         style={{scaleY: scrollYProgress}}
        
        className='absolute left-9 top-0 w-[4px] h-full bg-gradient-to-b from-purple-200 to-purple-700 origin-top '/>
          <ul className='w-full flex flex-col items-start justify-between'>
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
