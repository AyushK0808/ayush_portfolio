// components/Profile.js

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Highlight } from './hero';

const Profile = () => {
  return (
    <div className="flex flex-col items-center text-white p-6 min-h-screen">
      <motion.div
        className="flex flex-col md:flex-row items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            className="rounded-full xsm:w-[190px] xsm:h-[190px] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative border-4 border-purple-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/ayush.jpeg"
              alt="my image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </motion.div>
        </div>
        <motion.div
          className="md:ml-6 mt-6 md:mt-0 max-w-2xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          
          <p className="text-lg leading-relaxed">
            Hello There! I am <Highlight>Ayush Kumar</Highlight>, currently studying Computer Science at Vellore Institute of Technology, Vellore. My world revolves around problem-solving, with a keen focus on web development and machine learning.
            <br /><br />
            Fun fact: Beyond the tech realm, I enjoy exploring new cuisines and am always eager to learn new things. Just like a Jedi mastering the Force, I am committed to continuous learning and improving my skills.
            <br /><br />
            Additionally, I have a flair for designing applications and value effective collaboration. Excited about the dynamic field of technology, I am dedicated to continuous learning and collaborating on interesting projects.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Profile;
