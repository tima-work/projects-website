export default function GroupBubble({backgroundColor, darkModeBackgroundColor, textColor, darkModeTextColor, isDarkMode, text, }) {
    return (
        <div className={`rounded-4xl px-4 py-1 text-xl flex justify-center content-center items-center ${isDarkMode ? darkModeBackgroundColor : backgroundColor} ${isDarkMode ? darkModeTextColor : textColor}`}>
            {text}
        </div>
    )
}