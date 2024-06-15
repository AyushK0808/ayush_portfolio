"use client"

import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const MainNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="fixed md:relative top-0 left-0 w-full bg-primary shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Desktop View */}
        <div className="hidden md:flex justify-center w-full space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:example@gmail.com"
            className="hover:text-red-500 transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden justify-end w-full">
          {!isSidebarOpen && (
            <button onClick={toggleSidebar}>
              <FaBars size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isSidebarOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={clsx("fixed top-0 right-0 h-full w-64 bg-inherit shadow-lg z-50", {
          "flex flex-col justify-between p-4": isSidebarOpen,
        })}
      >
        <div>
          <div className="flex justify-end">
            <button onClick={toggleSidebar} className="p-2">
              <FaTimes size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#home" className='hover:font-bold'>Home</a>
            <a href="#skills" className='hover:font-bold'>My Skills</a>
            <a href="#projects" className='hover:font-bold' >My Projects</a>
            <a href="#experience" className='hover:font-bold'>Experience</a>
            <a href="#education" className='hover:font-bold'>Education</a>
            <a href="#contactme" className='hover:font-bold'>Get in Touch</a>
            <a href="/" className='text-purple-500 hover:font-bold'>Resume Link</a>
          </div>
        </div>
        <div className="flex space-x-4 mt-4 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:example@gmail.com"
            className="hover:text-red-500 transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default MainNavbar;
