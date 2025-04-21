// import React from 'react';
// import { motion } from 'framer-motion';
// import { Sun, Moon } from 'lucide-react';

// export default function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
//     return (
//         <div 
//             onClick={toggleDarkMode} 
//             className={`fixed top-4 right-4 z-50 w-20 h-10 rounded-full cursor-pointer flex items-center 
//             ${isDarkMode 
//                 ? 'bg-gray-700 justify-end' 
//                 : 'bg-gray-300 justify-start'
//             }`}
//         >
//             <motion.div 
//                 transition={{ 
//                     type: "spring", 
//                     stiffness: 100, 
//                     damping: 15 
//                 }}
//                 className={`w-8 h-8 rounded-full flex items-center justify-center 
//                 ${isDarkMode 
//                     ? 'bg-blue-500 text-white'
//                     : 'bg-yellow-500 text-gray-900'
//                 }`}
//             >
//                 {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
//             </motion.div>
//         </div>
//     );
// }





// import React from 'react';
// import { motion } from 'framer-motion';
// import { Sun, Moon } from 'lucide-react';

// export default function DarkModeToggle({ isDarkMode, toggleDarkMode, headerHeight }) {
//return (
// <div 
//     onClick={toggleDarkMode} 
//     className={`fixed top-4 right-4 z-50 w-20 h-10 rounded-full cursor-pointer p-1
//         ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}
//     `}
//     style={{ marginTop: `${headerHeight + 16}px` }}
// >
//     <motion.div 
//         initial={false}
//         animate={{ x: isDarkMode ? 40 : 0 }} // smooth movement
//         transition={{ type: 'spring', stiffness: 200, damping: 20 }}
//         className={`w-8 h-8 rounded-full flex items-center justify-center mt-1
//             absolute top-0 
//             ${isDarkMode 
//                 ? 'bg-blue-500 text-white' 
//                 : 'bg-yellow-500 text-gray-900'}
//         `}
//     >
//         {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
//     </motion.div>
// </div>
//         <motion.div
//     onClick={toggleDarkMode}
//     // Use "initial" with the exact position you want to start with
//     initial={{ y: headerHeight + 16 }}
//     // Then animate when headerHeight changes
//     animate={{ y: headerHeight + 16 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//     className={`fixed top-4 right-4 z-50 w-20 h-10 rounded-full cursor-pointer p-1
//         ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}
//     `}
// >
//     <motion.div 
//         // Set initial position explicitly
//         initial={{ x: isDarkMode ? 40 : 0 }}
//         // Then animate when isDarkMode changes
//         animate={{ x: isDarkMode ? 40 : 0 }}
//         transition={{ type: 'spring', stiffness: 200, damping: 20 }}
//         className={`w-8 h-8 rounded-full flex items-center justify-center mt-1
//             absolute top-0 
//             ${isDarkMode 
//                 ? 'bg-blue-500 text-white' 
//                 : 'bg-yellow-500 text-gray-900'}
//         `}
//     >
//         {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
//     </motion.div>
// </motion.div>
//     );
// }






import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DarkModeToggle({ isDarkMode, toggleDarkMode, headerHeight }) {
    // Track when we should start animating
    const [shouldAnimate, setShouldAnimate] = useState(false);
    // Store the initial header height
    const [initialHeight, setInitialHeight] = useState(null);

    useEffect(() => {
        // On first render, capture the initial header height
        if (initialHeight === null) {
            setInitialHeight(headerHeight);
        } else if (!shouldAnimate) {
            // After we have the initial height, enable animations for future changes
            setShouldAnimate(true);
        }
    }, [headerHeight, initialHeight]);

    return (
        <div
            onClick={toggleDarkMode}
            className={`fixed right-4 z-50 w-20 h-10 rounded-full cursor-pointer p-1
        ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}
      `}
            style={{
                // Always use direct positioning, no animation on first load
                top: headerHeight + 16,
                transition: shouldAnimate ? 'top 0.5s ease-in-out' : 'none'
            }}
        >
            <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mt-1
          absolute top-0 ml-1
          ${isDarkMode
                        ? 'bg-blue-500 text-white'
                        : 'bg-yellow-500 text-gray-900'}
        `}
                style={{
                    left: isDarkMode ? '40px' : '0px',
                    transition: 'left 0.3s ease'
                }}
            >
                {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
            </div>
        </div>
    );
}