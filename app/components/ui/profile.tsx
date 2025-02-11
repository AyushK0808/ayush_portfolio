import Image from 'next/image';
import { motion } from 'framer-motion';
import { Highlight } from './hero';

const Profile = () => {
  return (
    <div className="flex flex-col items-center text-white p-6">
      <motion.div
        className="flex flex-col md:flex-row items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="col-span-5 place-self-center lg:mt-0">
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
  Hello there! I am <Highlight>Ayush Kumar</Highlight>, a Computer Science student at Vellore Institute of Technology, Vellore. I am passionate about problem-solving, with a strong focus on web development and machine learning. I love building dynamic, user-friendly websites and exploring AI-driven solutions to real-world problems.  
  <br /><br />
  Beyond coding, I enjoy capturing stories through photography and discovering new cuisines. I also have a flair for designing applications and value effective collaboration in tech-driven projects.  
  <br /><br />
  Always eager to learn and innovate, I strive to push my limits and contribute to meaningful projects in the ever-evolving world of technology.
</p>

        </motion.div>
      </motion.div>
    </div>
  );
}

export default Profile;
