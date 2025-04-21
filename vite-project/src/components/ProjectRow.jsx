import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function ProjectRow({ index, project, isDarkMode, openImageModal }) {

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2 }}
            className={`flex flex-col md:flex-row items-center justify-center gap-8 
              ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
        >
            <div className={`w-full md:w-2/6 flex items-center 
              ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
                <div className="flex flex-col justify-center gap-4">
                    {/* <h3 className={`text-4xl font-semibold animate-shimmer ${isDarkMode ? "text-[#189c03] font-[Silkscreen]" : "text-transparent bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#00f0ff] dark:from-[#8e2de2] dark:via-[#4a00e0] dark:to-[#00f0ff] bg-clip-text"}`}
                > */}
                        <h3 className={`text-4xl font-semibold ${isDarkMode ? "text-[#189c03] font-[Silkscreen]" : "text-black font-[Saira]"}`}
                        >
                            {project.date}
                        </h3>
                    <p className={`text-xl ${isDarkMode ? "text-gray-400 font-[Silkscreen]" : "text-gray-900 font-[Saira]"}`}>{project.description}</p>
                </div>
            </div>
            <div className="w-full md:w-4/6 flex justify-center">
                <ProjectCard {...project} isDarkMode={isDarkMode} imageModalOpenFunction={openImageModal} />
            </div>
        </motion.div>
    )
}