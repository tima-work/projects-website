import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    GithubIcon,
    ExternalLink,
    Download,
    ChevronLeft,
    ChevronRight,
    Maximize2
} from 'lucide-react';
import ImageModal from "./ImageModal";

export default function ProjectCard({
    title,
    description,
    technologies,
    githubLink,
    images,
    type,
    liveLink = null,
    downloadLink = null,
    isDarkMode
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const imageVariants = {
        enter: (direction) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 0.9, // Adding a slight scale effect
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

    return (
        <>
            <div className={`${isDarkMode ? 'bg-gray-800 text-white hover:shadow-[0_0_100px_rgba(34,197,94,0.9)]' : 'bg-white text-black hover:shadow-[0_0_100px_rgba(255,154,38,0.9)]'} 
                shadow-2xl
                rounded-2xl overflow-hidden w-full h-[700px] flex flex-col transition-shadow duration-500`}>
                <div className="h-[400px] w-full overflow-hidden relative">
                    <AnimatePresence 
                        mode="popLayout" // Changed from "wait" to "popLayout"
                        custom={direction}
                    >
                        <motion.img
                            key={currentImageIndex}
                            src={images[currentImageIndex]}
                            alt={`${title} project main screenshot`}
                            className="w-full h-full object-cover cursor-pointer absolute top-0 left-0"
                            onClick={() => openModal(currentImageIndex)}
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            custom={direction}
                        />
                    </AnimatePresence>
                    <div className="absolute top-4 right-4 cursor-pointer hover:scale-110 bg-black/50 rounded-full p-2" onClick={() => openModal(currentImageIndex)}>
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
                {/* Rest of the component remains the same */}
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-left">{title}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-left`}>{description}</p>

                    <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-left">Technologies:</h4>
                        <div className="flex flex-wrap gap-3">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className={`${isDarkMode
                                        ? 'bg-blue-800 text-blue-200'
                                        : 'bg-blue-100 text-blue-800'} 
                                        text-base font-semibold px-3 py-1 rounded-full`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 mt-auto">
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center ${isDarkMode
                                ? 'text-gray-300 hover:text-blue-400'
                                : 'text-gray-700 hover:text-blue-600'}`}
                        >
                            <GithubIcon className="mr-2" /> GitHub
                        </a>

                        {type === 'website' && liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center ${isDarkMode
                                    ? 'text-gray-300 hover:text-blue-400'
                                    : 'text-gray-700 hover:text-blue-600'}`}
                            >
                                <ExternalLink className="mr-2" /> Live Site
                            </a>
                        )}

                        {(type === 'apk' || type === 'exe') && downloadLink && (
                            <a
                                href={downloadLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center ${isDarkMode
                                    ? 'text-gray-300 hover:text-blue-400'
                                    : 'text-gray-700 hover:text-blue-600'}`}
                            >
                                <Download className="mr-2" /> Download
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <ImageModal
                    images={images}
                    initialIndex={currentImageIndex}
                    onClose={() => setIsModalOpen(false)}
                    isDarkMode={isDarkMode}
                />
            )}
        </>
    );
}