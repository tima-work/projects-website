import { useEffect, useState } from "react";

export default function Popup({ children, onClose, isVisible, setIsVisible, handleCloseWithAnimation }) {

    // Prevent scrolling when modal is open and handle animation
    useEffect(() => {
        // Save the current scroll position
        const scrollY = window.scrollY;

        // Calculate scrollbar width
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        // Add padding to the body equal to scrollbar width to prevent layout shift
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        // Hide overflow but preserve the scrollbar space
        document.body.style.overflow = 'hidden';

        // Fix the body in place rather than letting it go to the top
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';

        // Small delay to trigger animation
        setTimeout(() => setIsVisible(true), 10);

        return () => {
            // Remove the fixed position
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';

            // Restore overflow
            document.body.style.overflow = '';

            // Remove the padding
            document.body.style.paddingRight = '';

            // Restore scroll position
            window.scrollTo(0, scrollY);
        };
    }, []);



    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center 
                 bg-black/30 backdrop-blur-sm transition-opacity duration-300
                 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleCloseWithAnimation}
        >
            {children}
        </div>
    )
}