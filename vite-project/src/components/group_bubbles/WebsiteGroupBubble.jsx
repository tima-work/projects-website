import GroupBubble from "./GroupBubble";

export default function WebsiteGroupBubble({isDarkMode}) {
    return (
        <GroupBubble backgroundColor="bg-[#59A96A]" darkModeBackgroundColor="bg-[#59A96A]" textColor="text-white" darkModeTextColor="text-white" isDarkMode={isDarkMode} text={"Website"} />
    )
}