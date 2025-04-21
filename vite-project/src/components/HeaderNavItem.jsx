export default function HeaderNavItem({ name, onClick, icon, isDarkMode }) {
    return (
        <div onClick={onClick} className={`cursor-pointer text-xl flex flex-row justify-center gap-1.5 items-center content-center rounded-2xl px-4 py-2  ${isDarkMode ? "hover:bg-gray-200 hover:text-black" : "hover:bg-gray-600 hover:text-white"}`}>{icon}{name}</div>
    );
}