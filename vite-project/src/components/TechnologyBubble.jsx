export default function TechnologyBubble({ index, tech, isDarkMode }) {
    return (
        <span
            key={index}
            className={`${isDarkMode
                ? 'bg-blue-800 text-blue-200'
                : 'bg-blue-100 text-blue-800'} 
                                        text-base font-semibold px-3 py-1 rounded-full`}
        >
            {tech}
        </span>
    )
}