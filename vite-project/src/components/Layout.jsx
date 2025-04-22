// "use client"

// import { useState } from "react"
// import Footer from "./Footer" // Your header component
// import DarkModeToggle from "./DarkModeToggle"
// import { motion, AnimatePresence } from "framer-motion"

// export default function Layout({ children, isDarkMode, toggleDarkMode, sortedProjects, setSelectedProject }) {
//   const [headerHeight, setHeaderHeight] = useState(0)
//   const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false)

//   // Function to be passed to Footer component to track its state and height
//   const handleHeaderToggle = (isCollapsed, height) => {
//     setIsHeaderCollapsed(isCollapsed)
//     setHeaderHeight(isCollapsed ? 0 : height)
//   }

//   return (
//     <div
//       className={`min-h-screen w-full 
//       ${isDarkMode ? "bg-gray-900" : "bg-[#fff7f2]"} 
//       transition-colors duration-500 ease-in-out`}
//     >
//       {/* Header stays fixed at the top */}
//       <Footer isDarkMode={isDarkMode} onToggle={handleHeaderToggle} />

//       {/* Main content container with dynamic padding based on header height */}
//       <div
//         className="w-full transition-all duration-500 ease-in-out"
//         style={{ paddingTop: `${headerHeight + 64}px` }} // 64px accounts for the toggle button area
//       >
//         {/* Dark Mode Toggle */}
//         <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

//         {/* Hero Section */}
//         <div className="container mx-auto px-4 py-16 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className={`text-5xl font-bold mb-6 bg-clip-text ${isDarkMode ? "font-[Silkscreen] text-[#189c03]" : "font-[Saira] text-gray-900 font-bold"}`}
//           >
//             Explore My Developer Journey
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className={`max-w-3xl mx-auto text-xl mb-12 
//               dark:text-gray-300 ${isDarkMode ? "font-[Silkscreen] text-gray-400" : "text-gray-600 font-[Saira]"}`}
//           >
//             Crafting innovative solutions that solve real-world challenges through code and creativity.
//           </motion.p>
//         </div>

//         {/* Projects Section */}
//         <div className="container mx-auto px-4 pb-16 relative">
//           {sortedProjects.map((project, index) => (
//             <div key={project.title}>
//               {/* Project content (same as your original code) */}
//               {/* ... */}
//             </div>
//           ))}
//         </div>

//         {/* Project Modal */}
//         <AnimatePresence>{/* ... your modal code ... */}</AnimatePresence>
//       </div>
//     </div>
//   )
// }

import { useEffect, useState } from "react";
import Footer from "./Footer";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../contexts/DarkModeContext";
import ContactMePopup from "./ContactMePopup";



export default function Layout({ children }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);


  useEffect(() => {
    const setRealVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
  
    setRealVh();
    window.addEventListener('resize', setRealVh);
    return () => window.removeEventListener('resize', setRealVh);
  }, []);



  const handleHeaderToggle = (isCollapsed, height) => {
    setHeaderHeight(isCollapsed ? 0 : height)
  }

  return (
    <div className={`min-h-[calc(100*var(--vh,1vh)] w-full 
      ${isDarkMode
        /*? 'bg-gradient-to-b from-[#101828] to-[#14202c] text-gray-100'*/
        ? 'bg-gray-900'
        /*: 'bg-gradient-to-br from-[#f0f4f8] via-[#e6eaf0] to-[#d1d9e6] text-gray-900'*/
        : 'bg-[#fff7f2]'
      // : 'bg-[#efefef]'
      } 
      transition-colors duration-500 ease-in-out`}
    >
      <Footer isDarkMode={isDarkMode} onToggle={handleHeaderToggle} openContactPopup={() => setShowContactPopup(true)}
 />

      <div className="w-full transition-all duration-500 ease-in-out"
        style={{ paddingTop: `${headerHeight + 64}px` }}>
        {/* Dark Mode Toggle */}
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} headerHeight={headerHeight} />

        {children}

        <ContactMePopup
          isOpen={showContactPopup}
          onClose={() => setShowContactPopup(false)}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}