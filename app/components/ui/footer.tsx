"use client";

import React from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:example@gmail.com"
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Email"
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
