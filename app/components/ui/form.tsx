"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null); // For success or error message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = {
      name,
      email,
      message,
    };

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setName(""); // Clear the form fields
        setEmail("");
        setMessage("");
      } else {
        setStatus(`Error: ${data.error || "Something went wrong!"}`);
      }
    } catch (error) {
      setStatus("Error: Unable to send message. Please try again later.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 p-6 bg-purple-800 bg-opacity-10 backdrop-filter backdrop-blur-md border border-purple-600 border-opacity-50 rounded-lg z-10">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 bg-purple-700 bg-opacity-50 border border-purple-600 border-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 bg-purple-700 bg-opacity-50 border border-purple-600 border-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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

      {/* Display status message */}
      {status && (
        <div className={`mt-4 text-center ${status.startsWith("Error") ? "text-red-500" : "text-green-500"}`}>
          {status}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
