import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Maximize2,
    ChevronLeft,
    ChevronRight,
    Rotate3D
} from 'lucide-react';
import TechnologyBubble from "./TechnologyBubble";
import GitHubLink from "./GitHubLink";
import DesktopAppGroupBubble from "./group_bubbles/DesktopAppGroupBubble";
import MobileAppGroupBubble from "./group_bubbles/MobileAppGroupBubble";
import WebsiteGroupBubble from "./group_bubbles/WebsiteGroupBubble";

export default function FlippableProjectCard({
    id,
    title,
    type,
    description,
    technologies,
    githubLinks,
    images,
    isDarkMode,
    imageModalOpenFunction,
    date
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    function makeBubble(type) {
        switch (type) {
            case "Mobile":
                return (<MobileAppGroupBubble isDarkMode={isDarkMode} />);
            case "Desktop":
                return (<DesktopAppGroupBubble isDarkMode={isDarkMode} />);
            case "Website":
                return (<WebsiteGroupBubble isDarkMode={isDarkMode} />);
        }
    }

    const imageVariants = {
        enter: (direction) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { duration: 0.5, ease: "easeInOut" },
                opacity: { duration: 0.5, ease: "easeInOut" },
                scale: { duration: 0.5, ease: "easeInOut" }
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0,
            scale: 0.9,
            transition: {
                x: { duration: 0.5, ease: "easeInOut" },
                opacity: { duration: 0.5, ease: "easeInOut" },
                scale: { duration: 0.5, ease: "easeInOut" }
            }
        }),
    };

    const cardVariants = {
        front: {
            rotateY: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
        },
        back: {
            rotateY: 180,
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };

    const handleNextImage = (e) => {
        e.stopPropagation();
        setDirection(1);
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handlePrevImage = (e) => {
        e.stopPropagation();
        setDirection(-1);
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    function openImageModal() {
        imageModalOpenFunction(id, currentImageIndex);
    }

    const handleFlip = (e) => {
        e.stopPropagation();
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="relative w-full h-[700px] perspective">
            <motion.div
                className="w-full h-full relative preserve-3d"
                animate={isFlipped ? "back" : "front"}
                variants={cardVariants}
            >
                {/* Front of card */}
                <div className={`${isDarkMode ? 'bg-gray-800 text-white hover:shadow-[0_0_100px_rgba(34,197,94,0.9)]' : 'bg-white text-black hover:shadow-[0_0_100px_rgba(255,154,38,0.9)]'} 
                        shadow-2xl absolute w-full h-full backface-hidden
                        rounded-2xl overflow-hidden flex flex-col transition-shadow duration-500`}>
                    <div className="h-[400px] w-full overflow-hidden relative">
                        <AnimatePresence
                            mode="popLayout"
                            custom={direction}
                        >
                            <motion.img
                                key={currentImageIndex}
                                src={images[currentImageIndex]}
                                alt={`${title} project main screenshot`}
                                className="w-full h-full object-cover cursor-pointer absolute top-0 left-0"
                                onClick={openImageModal}
                                variants={imageVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                custom={direction}
                            />
                        </AnimatePresence>
                        <div className="absolute top-4 right-4 cursor-pointer hover:scale-110 bg-black/50 rounded-full p-2" onClick={openImageModal}>
                            <Maximize2 className="text-white" size={20} />
                        </div>
                        {images.length > 1 && (
                            <>
                                <motion.div
                                    onClick={handlePrevImage}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ChevronLeft className="text-white" size={24} />
                                </motion.div>
                                <motion.div
                                    onClick={handleNextImage}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ChevronRight className="text-white" size={24} />
                                </motion.div>
                            </>
                        )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex flex-row justify-start gap-2 content-center items-center mb-2">
                            <h3 className="text-xl font-bold text-left">{title}</h3>
                            {makeBubble(type)}
                        </div>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-left`}>{description}</p>

                        <div className="mb-4">
                            <h4 className="font-semibold mb-2 text-left">Technologies:</h4>
                            <div className="flex flex-wrap gap-3">
                                {technologies.map((tech, index) => (
                                    <TechnologyBubble key={index} index={index} tech={tech} isDarkMode={isDarkMode} />
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 mt-auto flex-wrap gap-y-2">
                            {githubLinks.map((item, index) => (
                                <GitHubLink key={index} link={item.link} name={item.name} isDarkMode={isDarkMode} />
                            ))}
                        </div>
                    </div>


                    <motion.div
                        className="md:hidden absolute right-4 bottom-4 cursor-pointer bg-black/50 rounded-full p-3"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleFlip}
                    >
                        <Rotate3D className="text-white" size={20} />
                    </motion.div>
                </div>

                {/* Back of card */}
                <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} 
                        shadow-2xl absolute w-full h-full backface-hidden rotateY-180
                        rounded-2xl overflow-hidden flex flex-col justify-start p-8 transition-shadow duration-500`}>
                    <h3 className={`text-4xl font-semibold mb-6 ${isDarkMode ? "text-[#189c03] font-[Silkscreen]" : "text-black font-[Saira]"}`}>
                        {date}
                    </h3>
                    <p className={`text-xl ${isDarkMode ? "text-gray-400 font-[Silkscreen]" : "text-gray-900 font-[Saira]"}`}>
                        {description}
                    </p>




                    <motion.div
                        className="md:hidden absolute right-4 bottom-4 cursor-pointer bg-black/50 rounded-full p-3"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleFlip}
                    >
                        <Rotate3D className="text-white" size={20} />
                    </motion.div>
                </div>
            </motion.div>

            {/* Flip button (only visible on mobile) */}
        </div>
    );
}