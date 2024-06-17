"use client";

import React from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/AyushK0808"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/_ayush.0808?igsh=MXZuN2x5dWg1OXF3Ng=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-kumar-061a58251/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="mailto:theofficialayush,kumar@gmail.com"
            className="hover:text-red-500 transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-center md:text-left">© 2024 Ayush Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
