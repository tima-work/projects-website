export default function MyButton({ onClick, isDarkMode, children }) {
    return (
        <div className={`px-6 py-3 rounded-xl shadow-2xl transform cursor-pointer transition-all duration-300 flex flex-row justify-center gap-2
            ${isDarkMode
                ? "bg-[#0f7200] hover:bg-[#158f00] text-white font-[Silkscreen]"
                : "bg-blue-300 hover:bg-blue-400 text-black font-[Saira]"}`} onClick={onClick}>{children}</div>
    )
}