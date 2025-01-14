"use client";

import React, { useEffect, useState } from "react";

interface PopupCardProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const PopupCard: React.FC<PopupCardProps> = ({ message, type, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Auto-close the popup after 5 seconds
    const timeout = setTimeout(onClose, 5000);

    // Smoothly reduce the progress bar width
    const start = Date.now();
    const duration = 5000; // 5 seconds
    const interval = 100; // Update every 100ms

    const intervalId = setInterval(() => {
      const elapsed = Date.now() - start;
      const newProgress = Math.max(100 - (elapsed / duration) * 100, 0);
      setProgress(newProgress);

      if (elapsed >= duration) {
        clearInterval(intervalId);
      }
    }, interval);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalId);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div
        className={`relative w-80 p-6 rounded-lg text-white ${
          type === "success" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-white">
          <div
            className="h-full transition-[width] duration-100 ease-linear"
            style={{
              width: `${progress}%`,
              backgroundColor: type === "success" ? "#4ade80" : "#f87171",
            }}
          ></div>
        </div>

        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl hover:text-gray-200"
        >
          &times;
        </button>

        {/* Message */}
        <p className="mt-6 text-center">{message}</p>
      </div>
    </div>
  );
};

export default PopupCard;