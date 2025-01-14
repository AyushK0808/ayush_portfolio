"use client";

import React, { useState } from "react";
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const MainNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
      {/* Navbar Content */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Name */}
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 transition-transform">
          Ayush Kumar
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="text-white">
            {isDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#home"
            className="text-white hover:text-purple-400 transition-all font-medium"
          >
            Home
          </a>
          <a
            href="#aboutme"
            className="text-white hover:text-purple-400 transition-all font-medium"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="text-white hover:text-purple-400 transition-all font-medium"
          >
            My Skills
          </a>
          <a
            href="#projects"
            className="text-white hover:text-purple-400 transition-all font-medium"
          >
            My Projects
          </a>
          <a
            href="#experience"
            className="text-white hover:text-purple-400 transition-all font-medium"
          >
            Experience
          </a>
          <a
            href="#education"
            className="text-white hover:text-purple-400 transition-all font-medium"
          >
            Education
          </a>
          <a
            href="#contactme"
            className="text-white hover:text-purple-400 transition-all font-medium"
          >
            Get in Touch
          </a>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/12gxwBc7XgQCJGNyHAzzkkqsjnKNHek7O/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 rounded-full hover:scale-105 hover:shadow-lg transition-all font-medium"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Drawer for Mobile View */}
      {isDrawerOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-black via-purple-900 to-black shadow-lg z-50 flex flex-col justify-between p-4"
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={toggleDrawer} className="text-white">
              <FaTimes size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Home
            </a>
            <a
              href="#aboutme"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              My Skills
            </a>
            <a
              href="#projects"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              My Projects
            </a>
            <a
              href="#experience"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Education
            </a>
            <a
              href="#contactme"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Get in Touch
            </a>
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/12gxwBc7XgQCJGNyHAzzkkqsjnKNHek7O/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full text-center bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-full hover:scale-105 hover:shadow-lg transition-all font-medium"
            >
              View Resume
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 justify-center">
            <a
              href="https://github.com/AyushK0808"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-800 transition-all"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/_ayush.0808?igsh=MXZuN2x5dWg1OXF3Ng=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-all"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-kumar-061a58251/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-all"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="mailto:theofficialayush,kumar@gmail.com"
              className="text-white hover:text-red-500 transition-all"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default MainNavbar;
