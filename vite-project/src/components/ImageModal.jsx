// import { useState, useEffect } from "react";
// import { Minimize2, ChevronLeft, ChevronRight } from "lucide-react";

// export default function ImageModal({ images, initialIndex, onClose, isDarkMode }) {
//     const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

//     // Prevent scrolling when modal is open
//     useEffect(() => {
//         document.body.style.overflow = 'hidden';
//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, []);

//     const handleNext = () => {
//         setCurrentImageIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
//     };

//     const handlePrev = () => {
//         setCurrentImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
//     };

//     return (
//         <div
//             className="fixed inset-0 z-50 flex items-center justify-center 
//                  bg-black/30 backdrop-blur-sm"
//             onClick={onClose}
//         >
//             <div
//                 className="relative max-w-[90%] max-h-[90%] 
//                    flex flex-col items-center justify-center"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 <div className="relative w-full">
//                     <img
//                         src={images[currentImageIndex]}
//                         alt={`Project image ${currentImageIndex + 1}`}
//                         className="w-auto max-w-full max-h-[85vh] object-contain"
//                     />

//                     <p
//                         onClick={handlePrev}
//                         className={`absolute left-[-60px] top-1/2 transform -translate-y-1/2 text-5xl hover:opacity-70 transition-opacity cursor-pointer ${isDarkMode ? "text-white" : "text-black"}`}
//                     >
//                         <ChevronLeft size={36} />
//                     </p>

//                     <p className={`absolute right-[-60px] top-1/2 transform -translate-y-1/2 transition-opacity bg-transparent no-underline text-5xl font-bold cursor-pointer select-none ${isDarkMode ? "text-white" : "text-black"}`} onClick={handleNext}><ChevronRight size={36} /></p>



//                     <p
//                         onClick={onClose}
//                         className="absolute top-4 right-4 
//                        hover:opacity-70 transition-opacity bg-black/50 rounded-full cursor-pointer p-2 text-white"
//                     >
//                         <Minimize2 size={24} />
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }





import { useState, useEffect } from "react";
import { Minimize2, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageModal({ images, initialIndex, onClose, isDarkMode }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);
    const [isVisible, setIsVisible] = useState(false);

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

    const handleNext = (e) => {
        e.stopPropagation(); // Prevent event from bubbling up
        setCurrentImageIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
    };

    const handlePrev = (e) => {
        e.stopPropagation(); // Prevent event from bubbling up
        setCurrentImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
    };

    const handleCloseWithAnimation = () => {
        setIsVisible(false);
        setTimeout(() => onClose(), 300); // Match transition duration
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center 
                 bg-black/30 backdrop-blur-sm transition-opacity duration-300
                 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleCloseWithAnimation}
        >
            {/* Content container */}
            <div 
                className={`relative transition-transform duration-300
                   ${isVisible ? 'scale-100' : 'scale-95'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image */}
                <img
                    src={images[currentImageIndex]}
                    alt={`Project image ${currentImageIndex + 1}`}
                    className="w-auto max-w-[90vw] max-h-[85vh] object-contain"
                />
            </div>
            
            {/* Navigation elements outside the content container */}
            <p
                onClick={handlePrev}
                className={`fixed left-10 top-1/2 transform -translate-y-1/2
                    hover:opacity-70 transition-opacity cursor-pointer z-60
                    ${isDarkMode ? "text-white" : "text-black"}`}
            >
                <ChevronLeft size={36} />
            </p>

            <p
                onClick={handleNext}
                className={`fixed right-10 top-1/2 transform -translate-y-1/2
                    hover:opacity-70 transition-opacity cursor-pointer z-60
                    ${isDarkMode ? "text-white" : "text-black"}`}
            >
                <ChevronRight size={36} />
            </p>

            <p
                onClick={(e) => {
                    e.stopPropagation();
                    handleCloseWithAnimation();
                }}
                className="fixed top-10 right-10
                    hover:opacity-70 transition-opacity cursor-pointer z-60 text-white"
            >
                <Minimize2 size={24} />
            </p>
        </div>
    );
}