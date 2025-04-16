import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import './App.css'
import ProjectCard from './components/ProjectCard'



import pizza_image1 from './assets/pizzeria_project_pictures/image1.png';
import pizza_image2 from './assets/pizzeria_project_pictures/image2.png';
import pizza_image3 from './assets/pizzeria_project_pictures/image3.png';
import pizza_image4 from './assets/pizzeria_project_pictures/image4.png';
import pizza_image5 from './assets/pizzeria_project_pictures/image5.png';
import pizza_image6 from './assets/pizzeria_project_pictures/image6.png';


import mindfulness_image1 from './assets/mindfulness_pictures/image1.png';
import mindfulness_image2 from './assets/mindfulness_pictures/image2.png';
import mindfulness_image3 from './assets/mindfulness_pictures/image3.png';
import mindfulness_image4 from './assets/mindfulness_pictures/image4.png';
import mindfulness_image5 from './assets/mindfulness_pictures/image5.png';
import mindfulness_image6 from './assets/mindfulness_pictures/image6.png';



import housing_image1 from './assets/student_housing_pictures/image1.jpeg';
import housing_image2 from './assets/student_housing_pictures/image2.jpeg';
import housing_image3 from './assets/student_housing_pictures/image3.jpeg';
import housing_image4 from './assets/student_housing_pictures/image4.jpeg';
import housing_image5 from './assets/student_housing_pictures/image5.jpeg';
import housing_image6 from './assets/student_housing_pictures/image6.jpeg';



import reminder_image1 from './assets/reminder_pictures/image1.png';
import reminder_image2 from './assets/reminder_pictures/image2.png';
import reminder_image3 from './assets/reminder_pictures/image3.png';
import reminder_image4 from './assets/reminder_pictures/image4.png';
import reminder_image5 from './assets/reminder_pictures/image5.png';
import reminder_image6 from './assets/reminder_pictures/image6.png';



import culturelink_image1 from './assets/culturelink_pictures/image1.jpg';
import culturelink_image2 from './assets/culturelink_pictures/image2.jpg';
import culturelink_image3 from './assets/culturelink_pictures/image3.jpg';
import culturelink_image4 from './assets/culturelink_pictures/image4.jpg';
import culturelink_image5 from './assets/culturelink_pictures/image5.jpg';
import culturelink_image6 from './assets/culturelink_pictures/image6.jpg';




import helloworld_image1 from './assets/helloworld_pictures/image1.jpg';
import helloworld_image2 from './assets/helloworld_pictures/image2.jpg';
import helloworld_image3 from './assets/helloworld_pictures/image3.jpg';
import helloworld_image4 from './assets/helloworld_pictures/image4.jpg';
import helloworld_image5 from './assets/helloworld_pictures/image5.jpg';
import helloworld_image6 from './assets/helloworld_pictures/image6.jpg';




import zoo_bazaar_image1 from './assets/zoo_bazaar_pictures/image1.png';
import zoo_bazaar_image2 from './assets/zoo_bazaar_pictures/image2.png';
import zoo_bazaar_image3 from './assets/zoo_bazaar_pictures/image3.png';
import zoo_bazaar_image4 from './assets/zoo_bazaar_pictures/image4.png';
import zoo_bazaar_image5 from './assets/zoo_bazaar_pictures/image5.png';
import zoo_bazaar_image6 from './assets/zoo_bazaar_pictures/image6.png';




import language_image1 from './assets/map_of_language_pictures/image1.jpg';
import language_image2 from './assets/map_of_language_pictures/image2.jpg';
import language_image3 from './assets/map_of_language_pictures/image3.jpg';
import language_image4 from './assets/map_of_language_pictures/image4.jpg';
import language_image5 from './assets/map_of_language_pictures/image5.jpg';
import language_image6 from './assets/map_of_language_pictures/image6.jpg';
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'
import SquigglySVG from './components/SquigglySVG';
import ImageModal from './components/ImageModal';
import Layout from './components/Layout';
import { useDarkMode } from './contexts/DarkModeContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";
import HomePage from './pages/HomePage';
import CVPage from './pages/CVPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </Router>
  )

  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  // const [imageInitialIndex, setImageInitialIndex] = useState(0);
  // const [headerHeight, setHeaderHeight] = useState(0);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };
  // const { isDarkMode } = useDarkMode();


  // const closeImageModal = () => {
  //   setIsImageModalOpen(false);
  //   setSelectedProject(null);
  // };

  // const handleHeaderToggle = (isCollapsed, height) => {
  //   //setIsHeaderCollapsed(isCollapsed)
  //   setHeaderHeight(isCollapsed ? 0 : height)
  // }

  // const projects = [
  //   {
  //     id: 1,
  //     title: "HelloWorld",
  //     description: "App for mobile phones that aims to help people to get more information about different cultures, traditions, cuisines etc. The main way it's done is by posts, which can be discussed in the comments, and flashcards",
  //     technologies: ["Flutter", "Dart"],
  //     type: "apk",
  //     githubLinks: [{ name: "GitHub", link: "https://github.com/tima-work/culturelink" }],
  //     downloadLink: "/downloads/culturelink.apk",
  //     images: [
  //       helloworld_image1,
  //       helloworld_image2,
  //       helloworld_image3,
  //       helloworld_image4,
  //       helloworld_image5,
  //       helloworld_image6
  //     ],
  //     date: "April, 2025",
  //     progressOrder: 7
  //   },
  //   {
  //     id: 2,
  //     title: "CultureLink",
  //     description: "App for mobile phones that aims to help people to get more information about different cultures, traditions, cuisines etc. The main way it's done is by posts, which can be discussed in the comments, and flashcards",
  //     technologies: ["Flutter", "Dart"],
  //     type: "apk",
  //     githubLinks: [{ name: "GitHub", link: "https://github.com/tima-work/culturelink" }],
  //     downloadLink: "/downloads/culturelink.apk",
  //     images: [
  //       culturelink_image1,
  //       culturelink_image2,
  //       culturelink_image3,
  //       culturelink_image4,
  //       culturelink_image5,
  //       culturelink_image6
  //     ],
  //     date: "February, 2025",
  //     progressOrder: 6
  //   },
  //   {
  //     id: 3,
  //     title: "Reminder",
  //     description: "The service that aims to help people with Alzheimer's disease to justify the issues these people face in day-to-day life with note-taking, automatic task management and meal planning. The system also provides caretaker and relatives an easy way to follow the action of the person with dementia",
  //     technologies: ["Java", "React", "MySQL", "JWT token", "JPA", "Docker", "Cypress", "REST API", "CI/CD", "Vite", "SonarQube", "Jira", "Tailwind"],
  //     type: "website",
  //     githubLinks: [{ name: "GitHub (backend)", link: "https://github.com/tima-work/reminder-backend" }, { name: "Github (frontend)", link: "https://github.com/tima-work/reminder-frontend" }, { name: "GitHub (documentation)", link: "https://github.com/tima-work/reminder-documentation" }],
  //     liveLink: "https://reminder-frontend-six.vercel.app/",
  //     images: [
  //       reminder_image1,
  //       reminder_image2,
  //       reminder_image3,
  //       reminder_image4,
  //       reminder_image5,
  //       reminder_image6
  //     ],
  //     date: "October, 2024",
  //     progressOrder: 5
  //   },
  //   {
  //     id: 4,
  //     title: "MinfulLens",
  //     description: "Web system created in order to enhance the rationality and mindfulness by having the vocabulary of the most popular biases, helpful theories and methods, useful sources and nice exercises. The project also has the report system and a forum for discussing the hottest takes on rationality",
  //     technologies: ["ASP.NET", "MSSQL", "HTML", "CSS", "JavaScript", "C#"],
  //     type: "website",
  //     githubLinks: [{ name: "GitHub", link: "https://github.com/tima-work/mindfullens" }],
  //     liveLink: "https://i544392.luna.fhict.nl",
  //     images: [
  //       mindfulness_image1,
  //       mindfulness_image2,
  //       mindfulness_image3,
  //       mindfulness_image4,
  //       mindfulness_image5,
  //       mindfulness_image6
  //     ],
  //     date: "June, 2024",
  //     progressOrder: 4
  //   },
  //   {
  //     id: 5,
  //     title: "Zoo Bazaar",
  //     description: "App for mobile phones that aims to help people to get more information about different cultures, traditions, cuisines etc. The main way it's done is by posts, which can be discussed in the comments, and flashcards",
  //     technologies: ["Flutter", "Dart"],
  //     type: "apk",
  //     githubLinks: [{ name: "GitHub", link: "https://github.com/tima-work/culturelink" }],
  //     downloadLink: "/downloads/culturelink.apk",
  //     images: [
  //       zoo_bazaar_image1,
  //       zoo_bazaar_image2,
  //       zoo_bazaar_image3,
  //       zoo_bazaar_image4,
  //       zoo_bazaar_image5,
  //       zoo_bazaar_image6
  //     ],
  //     date: "March, 2024",
  //     progressOrder: 3
  //   },
  //   {
  //     id: 6,
  //     title: "Student housing",
  //     description: "Desktop app oriented on students giving them an opportunity to register in a room, view the announcements manage tasks, search for people and complain anonymously",
  //     technologies: ["C#", "WinForms"],
  //     type: "exe",
  //     githubLinks: [{ name: "GitHub", link: "https://github.com/tima-work/student_housing" }],
  //     downloadLink: "/downloads/StudentHousing.exe",
  //     images: [
  //       housing_image1,
  //       housing_image2,
  //       housing_image3,
  //       housing_image4,
  //       housing_image5,
  //       housing_image6
  //     ],
  //     date: "January, 2024",
  //     progressOrder: 2
  //   },
  //   {
  //     id: 7,
  //     title: "Pizzeria",
  //     description: "A simple app for the pizza shop that covers the needs of clients making it possible for them to place and track an order. It also has features tailored for cashiers making it easy for them to see and process the orders",
  //     technologies: ["Flask", "Python", "Arduino"],
  //     type: "website",
  //     githubLinks: [{ name: "GitHub", link: "https://github.com/tima-work/pizzeria-project" }],
  //     liveLink: "https://pizzeria-project-production.up.railway.app/",
  //     images: [
  //       pizza_image1,
  //       pizza_image2,
  //       pizza_image3,
  //       pizza_image4,
  //       pizza_image5,
  //       pizza_image6
  //     ],
  //     date: "November, 2023",
  //     progressOrder: 1
  //   },
  //   {
  //     id: 8,
  //     title: "Map of Language",
  //     description: "The side project created especially for learning languages by providing the clear structure and shallow learning curve with dividing program into themes and further into units. Another feature present is testing and practicing the words for sealing the knowledge",
  //     technologies: ["Kivy", "Buildozer", "Google TTS"],
  //     type: "exe",
  //     githubLinks: [{ name: "GitHub", link: "https://github.com/tima-work/map-of-language" }],
  //     downloadLink: "/downloads/map_of_language.apk",
  //     images: [
  //       language_image1,
  //       language_image2,
  //       language_image3,
  //       language_image4,
  //       language_image5,
  //       language_image6
  //     ],
  //     date: "May, 2023",
  //     progressOrder: 0
  //   }
  // ];

  // const [selectedProject, setSelectedProject] = useState(null);


  // const openImageModal = (id, currentImageIndex) => {
  //   setSelectedProject(projects.find(project => project.id === id));
  //   setImageInitialIndex(currentImageIndex);
  //   setIsImageModalOpen(true);
  // };

  // // Sort projects by progressOrder to create a chain of progression
  // const sortedProjects = projects.sort((a, b) => b.progressOrder - a.progressOrder);

  // return (
  //   <div className={`min-h-screen w-full 
  //     ${isDarkMode
  //       /*? 'bg-gradient-to-b from-[#101828] to-[#14202c] text-gray-100'*/
  //       ? 'bg-gray-900'
  //       /*: 'bg-gradient-to-br from-[#f0f4f8] via-[#e6eaf0] to-[#d1d9e6] text-gray-900'*/
  //       : 'bg-[#fff7f2]'
  //     // : 'bg-[#efefef]'
  //     } 
  //     transition-colors duration-500 ease-in-out`}
  //   >
  //     <Footer isDarkMode={isDarkMode} onToggle={handleHeaderToggle} />

  //     <div className="w-full transition-all duration-500 ease-in-out"
  //       style={{ paddingTop: `${headerHeight + 64}px` }}>
  //       {/* Dark Mode Toggle */}
  //       <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} headerHeight={headerHeight} />

  //       {/* Hero Section */}
  //       <div className="container mx-auto px-4 py-16 text-center">
  //         <motion.h1
  //           initial={{ opacity: 0, y: -50 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.8 }}
  //           // className={`text-5xl font-bold mb-6 bg-clip-text ${isDarkMode ? "font-[Silkscreen] text-[#189c03]" : "bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#00f0ff] dark:from-[#8e2de2] dark:via-[#4a00e0] dark:to-[#00f0ff] text-transparent"}`}
  //           className={`text-5xl font-bold mb-6 bg-clip-text ${isDarkMode ? "font-[Silkscreen] text-[#189c03]" : "font-[Saira] text-gray-900 font-bold"}`}
  //         >
  //           Explore My Developer Journey
  //         </motion.h1>
  //         <motion.p
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ duration: 0.8, delay: 0.3 }}
  //           className={`max-w-3xl mx-auto text-xl mb-12 
  //           dark:text-gray-300 ${isDarkMode ? "font-[Silkscreen] text-gray-400" : "text-gray-600 font-[Saira]"}`}
  //         >
  //           Crafting innovative solutions that solve real-world challenges through code and creativity.
  //         </motion.p>
  //       </div>

  //       <div className="container mx-auto px-4 pb-16 relative">
  //         {sortedProjects.map((project, index) => (
  //           <div key={project.title}>
  //             <motion.div
  //               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
  //               whileInView={{ opacity: 1, x: 0 }}
  //               viewport={{ once: true, amount: 0.3 }}
  //               transition={{ duration: 0.2 }}
  //               className={`flex flex-col md:flex-row items-center justify-center gap-8 
  //             ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
  //             >
  //               <div className={`w-full md:w-2/6 flex items-center 
  //             ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
  //               >
  //                 <div className="flex flex-col justify-center gap-4">
  //                   {/* <h3 className={`text-4xl font-semibold animate-shimmer ${isDarkMode ? "text-[#189c03] font-[Silkscreen]" : "text-transparent bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#00f0ff] dark:from-[#8e2de2] dark:via-[#4a00e0] dark:to-[#00f0ff] bg-clip-text"}`}
  //               > */}
  //                   <h3 className={`text-4xl font-semibold ${isDarkMode ? "text-[#189c03] font-[Silkscreen]" : "text-black font-[Saira]"}`}
  //                   >
  //                     {project.date}
  //                   </h3>
  //                   <p className={`text-xl ${isDarkMode ? "text-gray-400 font-[Silkscreen]" : "text-gray-900 font-[Saira]"}`}>{project.description}</p>
  //                 </div>
  //               </div>
  //               <div className="w-full md:w-4/6 flex justify-center">
  //                 <ProjectCard {...project} isDarkMode={isDarkMode} imageModalOpenFunction={openImageModal} />
  //               </div>
  //             </motion.div>

  //             {/* Add squiggly SVG between elements except the last one */}
  //             {index !== sortedProjects.length - 1 && (
  //               <div className="h-[500px] my-12 mx-8">
  //                 <SquigglySVG direction={index % 2 === 0 ? 'right' : 'left'} isDarkMode={isDarkMode} />
  //               </div>
  //             )}
  //           </div>
  //         ))}
  //       </div>

  //       {/* Footer Popping Up */}
  //       {/* <motion.div
  //         initial={{ opacity: 0, y: 50 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.6, delay: 1.2 }}
  //       > */}
  //         {/* <Footer isDarkMode={isDarkMode} /> */}
  //       {/* </motion.div> */}

  //       {/* Project Modal - Kept the same as original */}
  //       {/* <AnimatePresence>
          
  //       </AnimatePresence> */}
  //     </div>


  //     {isImageModalOpen && selectedProject && (
  //       <ImageModal
  //         isDarkMode={isDarkMode}
  //         onClose={closeImageModal}
  //         initialIndex={imageInitialIndex}
  //         images={selectedProject.images}
  //       />
  //     )}
  //   </div>
  // );


  // return (
  //   <Layout>
  //     {/* Hero Section */}
  //        <div className="container mx-auto px-4 py-16 text-center">
  //          <motion.h1
  //           initial={{ opacity: 0, y: -50 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.8 }}
  //           // className={`text-5xl font-bold mb-6 bg-clip-text ${isDarkMode ? "font-[Silkscreen] text-[#189c03]" : "bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#00f0ff] dark:from-[#8e2de2] dark:via-[#4a00e0] dark:to-[#00f0ff] text-transparent"}`}
  //           className={`text-5xl font-bold mb-6 bg-clip-text ${isDarkMode ? "font-[Silkscreen] text-[#189c03]" : "font-[Saira] text-gray-900 font-bold"}`}
  //         >
  //           Explore My Developer Journey
  //         </motion.h1>
  //         <motion.p
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ duration: 0.8, delay: 0.3 }}
  //           className={`max-w-3xl mx-auto text-xl mb-12 
  //           dark:text-gray-300 ${isDarkMode ? "font-[Silkscreen] text-gray-400" : "text-gray-600 font-[Saira]"}`}
  //         >
  //           Crafting innovative solutions that solve real-world challenges through code and creativity.
  //         </motion.p>
  //       </div>

  //       <div className="container mx-auto px-4 pb-16 relative">
  //         {sortedProjects.map((project, index) => (
  //           <div key={project.title}>
  //             <motion.div
  //               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
  //               whileInView={{ opacity: 1, x: 0 }}
  //               viewport={{ once: true, amount: 0.3 }}
  //               transition={{ duration: 0.2 }}
  //               className={`flex flex-col md:flex-row items-center justify-center gap-8 
  //             ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
  //             >
  //               <div className={`w-full md:w-2/6 flex items-center 
  //             ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
  //               >
  //                 <div className="flex flex-col justify-center gap-4">
  //                   {/* <h3 className={`text-4xl font-semibold animate-shimmer ${isDarkMode ? "text-[#189c03] font-[Silkscreen]" : "text-transparent bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#00f0ff] dark:from-[#8e2de2] dark:via-[#4a00e0] dark:to-[#00f0ff] bg-clip-text"}`}
  //               > */}
  //                   <h3 className={`text-4xl font-semibold ${isDarkMode ? "text-[#189c03] font-[Silkscreen]" : "text-black font-[Saira]"}`}
  //                   >
  //                     {project.date}
  //                   </h3>
  //                   <p className={`text-xl ${isDarkMode ? "text-gray-400 font-[Silkscreen]" : "text-gray-900 font-[Saira]"}`}>{project.description}</p>
  //                 </div>
  //               </div>
  //               <div className="w-full md:w-4/6 flex justify-center">
  //                 <ProjectCard {...project} isDarkMode={isDarkMode} imageModalOpenFunction={openImageModal} />
  //               </div>
  //             </motion.div>

  //             {/* Add squiggly SVG between elements except the last one */}
  //             {index !== sortedProjects.length - 1 && (
  //               <div className="h-[500px] my-12 mx-8">
  //                 <SquigglySVG direction={index % 2 === 0 ? 'right' : 'left'} isDarkMode={isDarkMode} />
  //               </div>
  //             )}
  //           </div>
  //         ))}
  //       </div>


  //     {isImageModalOpen && selectedProject && (
  //       <ImageModal
  //         isDarkMode={isDarkMode}
  //         onClose={closeImageModal}
  //         initialIndex={imageInitialIndex}
  //         images={selectedProject.images}
  //       />
  //     )}
  //   </Layout>
  // );


}

export default App
