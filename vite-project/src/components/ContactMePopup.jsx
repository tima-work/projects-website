import { useState } from "react";
import Popup from "./Popup"; // Assuming Popup component is in the same directory
import ContactLink from "./ContactLink";

export default function ContactMePopup({ isOpen, onClose, isDarkMode }) {
    const [isVisible, setIsVisible] = useState(false);

    const handleCloseWithAnimation = (e) => {
        // Only close if clicking the backdrop, not the content
        if (e.target === e.currentTarget) {
            setIsVisible(false);
            setTimeout(onClose, 300); // Wait for animation to complete
        }
    };

    if (!isOpen) return null;

    return (
        <Popup
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            handleCloseWithAnimation={handleCloseWithAnimation}
        >
            <div
                className={`${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'} 
                rounded-lg p-6 shadow-xl max-w-md w-full transition-colors duration-300`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the popup content
            >
                <div className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>

                    <ContactLink
                        href="https://linkedin.com/in/yourprofile"
                        iconColor={isDarkMode ? "text-blue-400" : "text-blue-600"}
                        linkText="LinkedIn"
                        isDarkMode={isDarkMode}
                    >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </ContactLink>

                    <ContactLink
                        href="https://github.com/yourusername"
                        iconColor={isDarkMode ? "text-gray-300" : "text-gray-800"}
                        linkText="GitHub"
                        isDarkMode={isDarkMode}
                    >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </ContactLink>
                    
                    <ContactLink
                        href="mailto:example@mail.com"
                        iconColor={isDarkMode ? "text-red-400" : "text-red-500"}
                        linkText="Email"
                        isDarkMode={isDarkMode}
                    >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </ContactLink>

                    <ContactLink
                        href="tel:+1234567890"
                        iconColor={isDarkMode ? "text-green-400" : "text-green-600"}
                        linkText="Phone"
                        isDarkMode={isDarkMode}
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </ContactLink>

                    <div
                        onClick={() => {
                            setIsVisible(false);
                            setTimeout(onClose, 300);
                        }}
                        className={`mt-4 py-2 px-4 rounded-md transition-colors font-medium flex justify-center w-full
                            ${isDarkMode 
                                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                    >
                        Close
                    </div>
                </div>
            </div>
        </Popup>
    );
}