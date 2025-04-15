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





import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle({ isDarkMode, toggleDarkMode, headerHeight }) {
    return (
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
        <motion.div
            onClick={toggleDarkMode}
            initial={false}
            animate={{ y: headerHeight + 16 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`fixed top-4 right-4 z-50 w-20 h-10 rounded-full cursor-pointer p-1
                ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}
            `}
        >
            <motion.div 
                initial={false}
                animate={{ x: isDarkMode ? 40 : 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center mt-1
                    absolute top-0 
                    ${isDarkMode 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-yellow-500 text-gray-900'}
                `}
            >
                {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
            </motion.div>
        </motion.div>
    );
}
