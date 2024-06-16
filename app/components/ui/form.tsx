"use client";

import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 p-6 bg-purple-800 bg-opacity-10 backdrop-filter backdrop-blur-md border border-purple-600 border-opacity-50 rounded-lg z-10">
      <form>
        <label htmlFor="name" className="block  mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 mb-4 bg-purple-700 bg-opacity-50 border border-purple-600 border-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <label htmlFor="email" className="block  mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 mb-4 bg-purple-700 bg-opacity-50 border border-purple-600 border-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <label htmlFor="message" className="block  mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 mb-4 bg-purple-700 bg-opacity-50 border border-purple-600 border-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
