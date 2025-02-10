import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ButtonData {
  label: string;
  content: string;
  link: string;
  position: { x: string; y: string };
}

const FloatingButtons: React.FC = () => {
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);
  const [activeCardData, setActiveCardData] = useState<ButtonData | null>(null);

  const buttons: ButtonData[] = [
    { 
      label: 'About Me', 
      content: 'A brief introduction about who I am and my professional journey.',
      link: '/about',
      position: { x: '-left-0', y: 'top-[10%]' }
    },
    { 
      label: 'My Experience', 
      content: 'Detailed overview of my professional work and achievements.',
      link: '/experience',
      position: { x: '-right-0', y: 'top-[30%]' }
    },
    { 
      label: 'My Education', 
      content: 'Academic background and significant learning milestones.',
      link: '/education',
      position: { x: '-left-0', y: 'bottom-[20%]' }
    },
    { 
      label: 'My Contributions', 
      content: 'Open-source projects, community involvement, and impact.',
      link: '/contributions',
      position: { x: '-right-0', y: 'bottom-[10%]' }
    }
  ];

  const handleButtonClick = (button: ButtonData) => {
    setActiveCardData(button);
    setIsCardOpen(true);
  };

  const handleCloseCard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCardOpen(false);
    setActiveCardData(null);
  };

  return (
    <div className="hidden md:block absolute inset-0 pointer-events-none">
      {buttons.map((button) => (
        <motion.div
          key={button.label}
          className={`absolute ${button.position.x} ${button.position.y} pointer-events-auto`}
          whileHover={{ 
            scale: 1.1,
            x: button.position.x.includes('left') ? 20 : -20,
            transition: { duration: 0.3 } 
          }}
        >
          <button 
            onClick={() => handleButtonClick(button)}
            className={`px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 relative group overflow-hidden 
              ${button.position.x.includes('left') ? 'translate-x-[-50%]' : 'translate-x-[50%]'}`}
          >
            <span className="relative z-10">{button.label}</span>
            <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full blur-lg"></span>
          </button>
        </motion.div>
      ))}

      <AnimatePresence>
        {isCardOpen && activeCardData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            onClick={handleCloseCard}
          >
            <motion.div 
              className="w-80 bg-white shadow-lg rounded-lg p-6 relative select-none"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <button 
                onMouseDown={handleCloseCard}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>
              <h3 className="text-xl font-bold mb-2">{activeCardData.label}</h3>
              <p className="text-gray-600 mb-4">{activeCardData.content}</p>
              <a 
                href={activeCardData.link} 
                className="text-purple-600 hover:underline"
              >
                Read More
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;