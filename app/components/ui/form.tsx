"use client";

import React, { useState } from "react";
import PopupCard from "./PopUpCard";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading state

    const formData = { name, email, message };

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setPopup({ message: "Message sent successfully!", type: "success" });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setPopup({ message: `Error: ${data.error || "Something went wrong!"}`, type: "error" });
      }
    } catch (error) {
      setPopup({ message: "Error: Unable to send message. Please try again later.", type: "error" });
      console.error("Form submission error:", error);
    } finally {
      setLoading(false); // Stop loading state
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
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded focus:outline-none disabled:bg-gray-500 disabled:cursor-not-allowed"
          disabled={loading} // Disable the button while loading
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Popup for status */}
      {popup && (
        <PopupCard
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup(null)}
        />
      )}
    </div>
  );
};

export default ContactForm;
