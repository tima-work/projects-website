import { GithubIcon } from "lucide-react";

export default function GitHubLink({ link, name = null, isDarkMode }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center text-[#646cff] font-medium ${isDarkMode
                ? 'hover:text-blue-400'
                : 'hover:text-blue-600'}`}
        >
            <GithubIcon className="mr-2" /> {name || "GitHub"}
        </a>
    );
}