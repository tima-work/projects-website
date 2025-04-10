import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
    return (
        <div 
            onClick={toggleDarkMode} 
            className={`fixed top-4 right-4 z-50 w-20 h-10 rounded-full cursor-pointer flex items-center 
            ${isDarkMode 
                ? 'bg-gray-700 justify-end' 
                : 'bg-gray-300 justify-start'
            }`}
        >
            <motion.div 
                layout 
                transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                }}
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                ${isDarkMode 
                    ? 'bg-blue-500 text-white'
                    : 'bg-yellow-500 text-gray-900'
                }`}
            >
                {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
            </motion.div>
        </div>
    );
}