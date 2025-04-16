



// import React from 'react';
// import { 
//     GithubIcon, 
//     LinkedinIcon, 
//     Mail, 
//     Phone, 
//     Download 
// } from 'lucide-react';
// import my_photo from '../assets/my-photo.png';

// export default function Footer({ isDarkMode }) {
//     const CV_DOWNLOAD_LINK = '/your-cv-filename.pdf';

//     return (
//         <header className={`
//             ${isDarkMode 
//                 ? 'bg-gradient-to-br from-gray-900 to-purple-900 font-["Silkscreen"] text-gray-100' 
//                 : 'bg-gradient-to-br from-[#d9f2ff] to-[#c2e9ff] font-[Saira]'
//                 // : "bg-[#fad6ac] font-[Saira]"
//             } py-16 px-4 md:px-12 transition-colors duration-300 relative
//         `}>
//             <div className="absolute inset-0 opacity-10 overflow-hidden -z-10">
//                  {isDarkMode ? (
//                     // Dark mode pattern: Matrix-like code pattern
//                     <div className="absolute inset-0 grid grid-cols-8 grid-rows-12">
//                         {Array.from({ length: 96 }).map((_, index) => (
//                             <div key={index} className="flex items-center justify-center text-2xl text-green-400 select-none">
//                                 {['01', '10', '001', '101', '010'][Math.floor(Math.random() * 5)]}
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     // Light mode pattern: Geometric shapes
//                     <div className="absolute inset-0">
//                         {Array.from({ length: 20 }).map((_, index) => (
//                             <div 
//                                 key={index} 
//                                 className={`
//                                     absolute w-16 h-16 rounded-lg opacity-20
//                                     ${['bg-blue-400', 'bg-purple-400', 'bg-indigo-400'][Math.floor(Math.random() * 3)]}
//                                 `}
//                                 style={{
//                                     top: `${Math.random() * 100}%`,
//                                     left: `${Math.random() * 100}%`,
//                                     transform: `rotate(${Math.random() * 360}deg)`,
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </div>
//             <div className="container mx-auto grid md:grid-cols-3 gap-8">
//                 {/* Personal Info Section */}
//                 <div className="flex flex-row items-center gap-4">
//                     <div className={`w-28 h-28 rounded-full overflow-hidden border-4 
//                         shadow-lg mb-4 ${isDarkMode ? "border-[#189c03]" : "border-black"}`}>
//                         <img 
//                             src={my_photo}
//                             alt="Name Surname picture" 
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <h2 className={`text-2xl font-bold mb-2 
//                             ${isDarkMode ? "text-[#189c03]" : "text-black"}`}
//                         >
//                             Name Surname
//                         </h2>
//                     <p className={`
//                         text-lg mb-4 
//                         ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}
//                     `}>
//                         Software Developer
//                     </p>
//                     </div>
//                 </div>

//                 {/* Social and Contact Links */}
//                 <div className="flex flex-col items-center">
//                     <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? "text-gray-300" : "text-black"}`}>Get in Touch</h3>
//                     <div className="flex space-x-6">
//                         <a 
//                             href="https://github.com/yourusername" 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             className={`
//                                 hover:scale-110 transition-transform
//                                 ${isDarkMode 
//                                     ? 'text-gray-300 hover:text-blue-400' 
//                                     : 'text-gray-700 hover:text-blue-600'
//                                 }
//                             `}
//                         >
//                             <GithubIcon size={32} />
//                         </a>
//                         <a 
//                             href="https://linkedin.com/in/yourusername" 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             className={`
//                                 hover:scale-110 transition-transform
//                                 ${isDarkMode 
//                                     ? 'text-gray-300 hover:text-blue-400' 
//                                     : 'text-gray-700 hover:text-blue-600'
//                                 }
//                             `}
//                         >
//                             <LinkedinIcon size={32} />
//                         </a>
//                         <a 
//                             href="mailto:your.email@example.com"
//                             className={`
//                                 hover:scale-110 transition-transform
//                                 ${isDarkMode 
//                                     ? 'text-gray-300 hover:text-blue-400' 
//                                     : 'text-gray-700 hover:text-blue-600'
//                                 }
//                             `}
//                         >
//                             <Mail size={32} />
//                         </a>
//                         <a
//                             href="tel:+1234567890"
//                             className={`
//                                 hover:scale-110 transition-transform
//                                 ${isDarkMode 
//                                     ? 'text-gray-300 hover:text-blue-400' 
//                                     : 'text-gray-700 hover:text-blue-600'
//                                 }
//                             `}
//                         >
//                             <Phone size={28} />
//                         </a>
//                     </div>
//                 </div>

//                 {/* CV Download Section */}
//                 <div className="flex flex-col items-center">
//                     <h3 className="text-xl font-semibold mb-6">Check my CV for more details</h3>
//                     <a 
//                         href={CV_DOWNLOAD_LINK}
//                         download
//                         className={`
//                             flex items-center px-6 py-3 rounded-lg transition-all duration-300
//                             ${isDarkMode 
//                                 ? 'bg-[#0f7200] hover:bg-[#158f00] text-red-950' 
//                                 : 'bg-blue-300 hover:bg-blue-400 text-blue-800'
//                             }
//                         `}
//                     >
//                         <Download className={`mr-2 ${isDarkMode ? "text-blue-100" : "text-blue-800"}`} /> <span className={`${isDarkMode ? "text-blue-100" : "text-blue-800"}`}>Download CV</span>
//                     </a>
//                     {/* <p className={`
//                         mt-4 text-center
//                         ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}
//                     `}>
//                         Check my CV for more details
//                     </p> */}
//                 </div>
//             </div>
//         </header>
//     );
// }










import React, { useState, useEffect, useRef } from 'react';
import {
    GithubIcon,
    LinkedinIcon,
    Mail,
    Phone,
    Download,
    ChevronDown,
    ChevronUp,
    HomeIcon,
    InfoIcon,
    PhoneIcon
} from 'lucide-react';
import my_photo from '../assets/my-photo.png';
import { useNavigate } from 'react-router'
import HeaderNavItem from './HeaderNavItem';

export default function Footer({ isDarkMode, onToggle }) {
    const CV_DOWNLOAD_LINK = '/your-cv-filename.pdf';
    const [isCollapsed, setIsCollapsed] = useState(false);
    const headerRef = useRef(null);
    const navigate = useNavigate();



    // Calculate and report header height when collapsed state changes
    useEffect(() => {
        if (headerRef.current) {
            const height = isCollapsed ? 0 : headerRef.current.offsetHeight
            // Call the parent component's callback with current state and height
            onToggle && onToggle(isCollapsed, height)
        }
    }, [isCollapsed, onToggle])


    // Toggle collapsed state
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }



    // Optional: Auto-collapse after page load for a cleaner initial view
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsCollapsed(true);
    //     }, 3000); // Auto-collapse after 3 seconds

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                transform: isCollapsed ? 'translateY(-100%)' : 'translateY(0)',
                paddingBottom: '24px'
            }}>
            <header
                ref={headerRef}
                className={`
                ${isDarkMode
                        ? 'bg-gradient-to-br from-gray-900 to-purple-900 font-["Silkscreen"] text-gray-100'
                        : 'bg-gradient-to-br from-[#d9f2ff] to-[#c2e9ff] font-[Saira]'
                    } py-4 px-4 md:px-12 transition-colors duration-300 relative
            `}>

                <div className="flex flex-row justify-between gap-8 w-full">
                    {/* Personal Info Section */}
                    <div className="flex flex-row items-center gap-4">
                        <div className={`w-44 h-44 rounded-full overflow-hidden border-4 
                            shadow-lg mb-4 ${isDarkMode ? "border-[#189c03]" : "border-black"}`}>
                            <img
                                src={my_photo}
                                alt="Name Surname picture"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h2 className={`text-2xl font-bold mb-2 
                                ${isDarkMode ? "text-[#189c03]" : "text-black"}`}
                            >
                                Name Surname
                            </h2>
                            <p className={`
                            text-lg mb-4 
                            ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}
                        `}>
                                Software Developer
                            </p>
                        </div>
                    </div>

                    {/* Social and Contact Links */}
                    {/* <div className="flex flex-col items-center">
                        <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? "text-gray-300" : "text-black"}`}>Get in Touch</h3>
                        <div className="flex space-x-6">
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                    hover:scale-110 transition-transform
                                    ${isDarkMode
                                        ? 'text-gray-300 hover:text-blue-400'
                                        : 'text-gray-700 hover:text-blue-600'
                                    }
                                `}
                            >
                                <GithubIcon size={32} />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                    hover:scale-110 transition-transform
                                    ${isDarkMode
                                        ? 'text-gray-300 hover:text-blue-400'
                                        : 'text-gray-700 hover:text-blue-600'
                                    }
                                `}
                            >
                                <LinkedinIcon size={32} />
                            </a>
                            <a
                                href="mailto:your.email@example.com"
                                className={`
                                    hover:scale-110 transition-transform
                                    ${isDarkMode
                                        ? 'text-gray-300 hover:text-blue-400'
                                        : 'text-gray-700 hover:text-blue-600'
                                    }
                                `}
                            >
                                <Mail size={32} />
                            </a>
                            <a
                                href="tel:+1234567890"
                                className={`
                                    hover:scale-110 transition-transform
                                    ${isDarkMode
                                        ? 'text-gray-300 hover:text-blue-400'
                                        : 'text-gray-700 hover:text-blue-600'
                                    }
                                `}
                            >
                                <Phone size={28} />
                            </a>
                        </div>
                    </div> */}


                    {/* CV Download Section */}
                    {/* <div className="flex flex-col items-center">
                        <h3 className="text-xl font-semibold mb-6">Check my CV for more details</h3>
                        <a
                            href={CV_DOWNLOAD_LINK}
                            download
                            className={`
                                flex items-center px-6 py-3 rounded-lg transition-all duration-300
                                ${isDarkMode
                                    ? 'bg-[#0f7200] hover:bg-[#158f00] text-red-950'
                                    : 'bg-blue-300 hover:bg-blue-400 text-blue-800'
                                }
                            `}
                        >
                            <Download className={`mr-2 ${isDarkMode ? "text-blue-100" : "text-blue-800"}`} /> <span className={`${isDarkMode ? "text-blue-100" : "text-blue-800"}`}>Download CV</span>
                        </a>
                    </div> */}

                    <div className="flex flex-row justify-center gap-8 content-center items-center">
                        <HeaderNavItem name={"Home"} icon={<HomeIcon />} onClick={() => navigate("/home")} />
                        <HeaderNavItem name={"Resume"} icon={<InfoIcon />} onClick={() => navigate("/cv")} />
                        <HeaderNavItem name={"Contact"} icon={<PhoneIcon />} onClick={() => window.alert("Hello")} />
                    </div>
                </div>
            </header>

            {/* Toggle Button - Always visible */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10">
                <div
                    onClick={toggleCollapse}
                    className={`
                        p-2 rounded-full shadow-lg transition-all duration-300 border-0 outline-0 focus:border-0 focus:outline-none focus:border-none focus:ring-0 px-4
                        ${isDarkMode
                            ? 'bg-[#0f7200] hover:bg-[#158f00] text-white'
                            : 'bg-white hover:bg-blue-100 text-blue-800'
                        }
                    `}
                    aria-label={isCollapsed ? "Expand header" : "Collapse header"}
                >
                    {isCollapsed ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
                </div>
            </div>
        </div>
    );
}















// "use client"

// import { useState, useEffect, useRef } from "react"
// import { ChevronDown, ChevronUp } from "lucide-react"

// export default function Footer({ isDarkMode, onToggle }) {
//   const CV_DOWNLOAD_LINK = "/your-cv-filename.pdf"
//   const [isCollapsed, setIsCollapsed] = useState(false)
//   const headerRef = useRef(null)

//   // Calculate and report header height when collapsed state changes
//   useEffect(() => {
//     if (headerRef.current) {
//       const height = isCollapsed ? 0 : headerRef.current.offsetHeight
//       // Call the parent component's callback with current state and height
//       onToggle && onToggle(isCollapsed, height)
//     }
//   }, [isCollapsed, onToggle])

//   // Toggle collapsed state
//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed)
//   }

//   return (
//     <div
//       className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
//       style={{ transform: isCollapsed ? "translateY(-100%)" : "translateY(0)" }}
//     >
//       <header
//         ref={headerRef}
//         className={`
//                     ${
//                       isDarkMode
//                         ? 'bg-gradient-to-br from-gray-900 to-purple-900 font-["Silkscreen"] text-gray-100'
//                         : "bg-gradient-to-br from-[#d9f2ff] to-[#c2e9ff] font-[Saira]"
//                     } py-16 px-4 md:px-12 transition-colors duration-300 relative
//                 `}
//       >
//         {/* Header content (same as your original code) */}
//         <div className="absolute inset-0 opacity-10 overflow-hidden -z-10">
//           {/* Background patterns */}
//           {/* ... */}
//         </div>
//         <div className="container mx-auto grid md:grid-cols-3 gap-8">
//           {/* Personal Info Section */}
//           <div className="flex flex-row items-center gap-4">{/* ... */}</div>

//           {/* Social and Contact Links */}
//           <div className="flex flex-col items-center">{/* ... */}</div>

//           {/* CV Download Section */}
//           <div className="flex flex-col items-center">{/* ... */}</div>
//         </div>
//       </header>

//       {/* Toggle Button - Always visible */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10">
//         <div
//           onClick={toggleCollapse}
//           className={`
//                         p-2 rounded-full shadow-lg transition-all duration-300 border-0 outline-0 focus:border-0 focus:outline-none focus:border-none focus:ring-0 px-4
//                         ${
//                           isDarkMode
//                             ? "bg-[#0f7200] hover:bg-[#158f00] text-white"
//                             : "bg-white hover:bg-blue-100 text-blue-800"
//                         }
//                     `}
//           aria-label={isCollapsed ? "Expand header" : "Collapse header"}
//         >
//           {isCollapsed ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
//         </div>
//       </div>
//     </div>
//   )
// }

