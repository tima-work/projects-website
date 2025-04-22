// import { motion } from "framer-motion";
// import FlippableProjectCard from "./FlippableProjectCard";
// import ProjectCard from "./ProjectCard";

// export default function FlippableProjectRow({ index, project, isDarkMode, openImageModal }) {
//     return (
//         <motion.div
//             initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.2 }}
//             className={`flex flex-col md:flex-row items-center justify-center gap-8 
//               ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
//         >
//             {/* Project info section - only visible on md screens and up */}
//             <div className={`hidden md:flex w-full md:w-2/6 items-center 
//               ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
//             >
//                 <div className="flex flex-col justify-center gap-4">
//                     <h3 className={`text-4xl font-semibold ${isDarkMode ? "text-[#189c03] font-[Silkscreen]" : "text-black font-[Saira]"}`}>
//                         {project.date}
//                     </h3>
//                     <p className={`text-xl ${isDarkMode ? "text-gray-400 font-[Silkscreen]" : "text-gray-900 font-[Saira]"}`}>
//                         {project.description}
//                     </p>
//                 </div>
//             </div>
            
//             {/* Project card section */}
//             <div className="w-full md:w-4/6 flex justify-center">
//                 <ProjectCard 
//                     {...project} 
//                     isDarkMode={isDarkMode} 
//                     imageModalOpenFunction={openImageModal} 
//                 />
//             </div>
//         </motion.div>
//     );
// }