import React, { useState, useEffect, useRef } from 'react';
import {
    ChevronDown,
    ChevronUp,
    HomeIcon,
    InfoIcon,
    Mail,
    PhoneIcon,
    UserCircle
} from 'lucide-react';
import my_photo from '../assets/my-photo.png';
import { useNavigate } from 'react-router'
import HeaderNavItem from './HeaderNavItem';

export default function Footer({ isDarkMode, onToggle, openContactPopup }) {
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

                <div className="flex flex-col lg:flex-row justify-between gap-8 w-full">
                    {/* Personal Info Section */}
                    <div className="flex flex-row items-center gap-4">
                        <div className={`w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 
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


                    <div className="flex flex-row justify-evenly gap-4 content-center items-center w-full lg:w-auto lg:justify-center">
                        <HeaderNavItem name={"Home"} icon={<HomeIcon />} onClick={() => navigate("/")} isDarkMode={isDarkMode} />
                        <HeaderNavItem name={"Resume"} icon={<UserCircle />} onClick={() => navigate("/cv")} isDarkMode={isDarkMode} />
                        <HeaderNavItem name={"Contact"} icon={<Mail />} onClick={openContactPopup} isDarkMode={isDarkMode} />
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