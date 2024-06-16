"use client";

import React from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
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
        <p className="text-center">© 2024 Ayush Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
