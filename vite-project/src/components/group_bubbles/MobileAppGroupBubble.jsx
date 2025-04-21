import GroupBubble from "./GroupBubble";

export default function MobileAppGroupBubble({isDarkMode}) {
    return (
        <GroupBubble backgroundColor="bg-[#5F4BB6]" darkModeBackgroundColor="bg-[#5F4BB6]" textColor="text-white" darkModeTextColor="text-white" isDarkMode={isDarkMode} text={"Mobile app"} />
    )
}