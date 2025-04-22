// import ProjectCard from "./ProjectCard";
// import { motion } from "framer-motion";

// export default function ProjectRow({ index, project, isDarkMode, openImageModal }) {
    

//     return (
//         <motion.div
//             initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.1 }} // Reduced from 0.3
//             transition={{ duration: 0.2 }}
//             className={`flex flex-col md:flex-row items-center justify-center gap-8 min-h-0
//                 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
//               style={{ flex: '0 0 auto' }} // Prevent flex growth
//         >
//             <div className={`w-full md:w-2/6 flex items-center 
//               ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
//             >
//                 <div className="flex flex-col justify-center gap-4">
//                         <h3 className={`text-4xl font-semibold ${isDarkMode ? "text-[#189c03] font-[Silkscreen]" : "text-black font-[Saira]"}`}
//                         >
//                             {project.date}
//                         </h3>
//                     <p className={`text-xl ${isDarkMode ? "text-gray-400 font-[Silkscreen]" : "text-gray-900 font-[Saira]"}`}>{project.description}</p>
//                 </div>
//             </div>
//             <div className="w-full md:w-4/6 flex justify-center">
//                 <ProjectCard {...project} isDarkMode={isDarkMode} imageModalOpenFunction={openImageModal} />
//             </div>
//         </motion.div>
//     )
// }









import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectRow({ index, project, isDarkMode, openImageModal }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -15% 0px'
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        relative w-full
        flex flex-col md:flex-row
        items-center justify-between
        min-h-0 overflow-hidden
        ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
      `}
      style={{
        transform: isInView ? 'none' : 
          `translateX(${index % 2 === 0 ? '-12px' : '12px'})`,
        opacity: isInView ? 1 : 0,
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
      }}
    >
      {/* Text Content - Order alternates based on index */}
      <div className={`w-full md:w-2/6 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
        <div className="flex flex-col justify-center gap-4">
          <h3 className={`text-4xl font-semibold ${isDarkMode ? "text-[#189c03] font-[Silkscreen]" : "text-black font-[Saira]"}`}>
            {project.date}
          </h3>
          <p className={`text-xl ${isDarkMode ? "text-gray-400 font-[Silkscreen]" : "text-gray-900 font-[Saira]"}`}>
            {project.description}
          </p>
        </div>
      </div>

      {/* Project Card - Always centered in its container */}
      <div className="w-full md:w-4/6 flex justify-center">
        <ProjectCard {...project} isDarkMode={isDarkMode} imageModalOpenFunction={openImageModal} />
      </div>
    </div>
  );
}








