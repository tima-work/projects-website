
import React from "react";

export default function ContactLink({ children, iconColor, href, linkText, isDarkMode }) {
  return (
    <a 
      href={href}
      className={`flex flex-row items-center space-x-3 p-3 rounded-md transition-colors hover:underline decoration-blue-600 ${isDarkMode 
        ? 'hover:bg-gray-700' 
        : 'hover:bg-gray-100'}`}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={iconColor}
      >
        {children}
      </svg>
      <span className={`font-medium text-blue-600 ${isDarkMode 
          ? 'text-blue-400'
          : 'text-blue-600'}`}>{linkText}</span>
    </a>
  );
}



// import React from "react";

// export default function ContactLink({ children, iconColor, href, linkText, isDarkMode = false }) {
//   return (
//     <a 
//       href={href}
//       className={`flex flex-row items-center space-x-3 p-3 rounded-md transition-colors
//         ${isDarkMode 
//           ? 'hover:bg-gray-700' 
//           : 'hover:bg-gray-100'}`}
//       target={href.startsWith("http") ? "_blank" : undefined}
//       rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
//     >
//       <svg 
//         xmlns="http://www.w3.org/2000/svg" 
//         width="24" 
//         height="24" 
//         viewBox="0 0 24 24" 
//         fill="none" 
//         stroke="currentColor" 
//         strokeWidth="2" 
//         strokeLinecap="round" 
//         strokeLinejoin="round"
//         className={iconColor}
//       >
//         {children}
//       </svg>
//       <span className={`font-medium hover:underline
//         ${isDarkMode 
//           ? 'text-blue-400'
//           : 'text-blue-600'}`}
//       >
//         {linkText}
//       </span>
//     </a>
//   );
// }