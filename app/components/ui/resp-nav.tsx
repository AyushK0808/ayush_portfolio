import React, { useState } from "react";
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface SocialLink {
  icon: JSX.Element;
  href: string;
  hoverColor: string;
}

interface NavigationLink {
  href: string;
  text: string;
}

const MainNavbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Animation variants remain the same
  const socialIconVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const sidebarLinkVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const sidebarVariants: Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const socialLinks: SocialLink[] = [
    { icon: <FaGithub size={24} />, href: "https://github.com/AyushK0808", hoverColor: "hover:text-blue-800" },
    { icon: <FaInstagram size={24} />, href: "https://www.instagram.com/_ayush.0808?igsh=MXZuN2x5dWg1OXF3Ng==", hoverColor: "hover:text-pink-500" },
    { icon: <FaLinkedinIn size={24} />, href: "https://www.linkedin.com/in/ayush-kumar-061a58251/", hoverColor: "hover:text-blue-500" },
    { icon: <FaEnvelope size={24} />, href: "mailto:theofficialayush.kumar@gmail.com", hoverColor: "hover:text-red-500" }
  ];

  const navigationLinks: NavigationLink[] = [
    { href: "#home", text: "Home" },
    { href: "#aboutme", text: "About Me" },
    { href: "#skills", text: "My Skills" },
    { href: "#projects", text: "My Projects" },
    { href: "#experience", text: "Work Experience" },
    { href: "#keyroles", text: "Key Roles" },
    { href: "#education", text: "Education" },
    { href: "#contactme", text: "Get in Touch" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50">
      {/* Added a gradient border container */}
      <div className="relative">
        {/* Main navbar content */}
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Name */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
          >
            Ayush Kumar
          </motion.div>

          {/* Social Media Links for Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white ${social.hoverColor} transition-all`}
                variants={socialIconVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
            
            {/* Menu Icon for Both Mobile and Desktop */}
            <motion.button 
              onClick={toggleDrawer}
              className="text-white ml-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>

          {/* Menu Icon for Mobile Only */}
          <div className="md:hidden">
            <motion.button 
              onClick={toggleDrawer}
              className="text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>
        
        {/* Gradient border */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600" />
      </div>

      {/* Sidebar for Both Mobile and Desktop */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-black via-purple-900 to-black shadow-lg z-50 flex flex-col justify-between p-4"
          >
            {/* Close Button */}
            <motion.div 
              className="flex justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.button 
                onClick={toggleDrawer}
                className="text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes size={24} />
              </motion.button>
            </motion.div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-white hover:text-purple-400 transition-all font-medium"
                  variants={sidebarLinkVariants}
                  custom={index}
                  whileHover={{ x: 10 }}
                >
                  {link.text}
                </motion.a>
              ))}
              
              {/* Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1krIATOATsOrsDjaJSBzAyvYj_lU_LRv5/view"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full text-center bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-full hover:shadow-lg transition-all font-medium"
                variants={sidebarLinkVariants}
                custom={navigationLinks.length}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
            </div>

            {/* Social Media Links in Sidebar */}
            <motion.div 
              className="flex space-x-4 mt-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white ${social.hoverColor} transition-all`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MainNavbar;