import GroupBubble from "./GroupBubble";

export default function DesktopAppGroupBubble({isDarkMode}) {
    return (
        <GroupBubble backgroundColor="bg-[#E26D5C]" darkModeBackgroundColor="bg-[#E26D5C]" textColor="text-white" darkModeTextColor="text-white" isDarkMode={isDarkMode} text={"Destop app"} />
    )
}