import { useState } from "react";
import Popup from "./Popup";
import { ChevronLeft, ChevronRight, Minimize2 } from "lucide-react";


export default function ImageModal2({ images, initialIndex, onClose, isDarkMode }) {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);
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
        <Popup onClose={onClose} isVisible={isVisible} setIsVisible={setIsVisible} handleCloseWithAnimation={handleCloseWithAnimation}>
            <div
                className={`relative transition-transform duration-300
                   ${isVisible ? 'scale-100' : 'scale-95'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image */}
                <img
                    src={images[currentImageIndex]}
                    alt={`Project image ${currentImageIndex + 1}`}
                    className="w-auto max-w-[90vw] max-h-[85vh] object-contain select-none"
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
                className={`fixed top-10 right-10
                    hover:opacity-70 transition-opacity cursor-pointer z-60 ${isDarkMode ? "text-white" : "text-black"}`}
            >
                <Minimize2 size={24} />
            </p>


            {/* Pagination dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <p
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex
                                ? 'bg-white'
                                : 'bg-gray-600 hover:bg-gray-300'
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>

            {/* Image counter */}
            <div className={`absolute bottom-10 left-0 right-0 text-center ${isDarkMode ? "text-white" : "text-black"
                }`}>
                {currentImageIndex + 1}/{images.length}
            </div>
        </Popup>
    )
}