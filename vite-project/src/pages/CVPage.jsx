import Layout from "../components/Layout";
import { useDarkMode } from "../contexts/DarkModeContext";
import { DownloadIcon, FileText, ImageIcon } from "lucide-react";
import DownloadButton from "../components/DownloadButton";
import { useEffect, useState } from "react";

export default function CVPage() {
    const { isDarkMode } = useDarkMode();
    const [isMobile, setIsMobile] = useState(false);
    
    // Detect mobile device
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        handleResize(); // Check on initial load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Layout>
            <div className="flex flex-col items-center w-full h-full gap-4 py-4 md:gap-6 md:py-8 px-2 md:px-4">
                {/* CV Viewer - Responsive container */}
                <div className="w-full max-w-5xl bg-white rounded shadow">
                    <div className="flex items-center justify-between p-2 border-b">
                        <h2 className="text-lg font-medium">CV Preview</h2>
                        {isMobile && (
                            <span className="text-xs text-gray-500">
                                Scroll to view full document
                            </span>
                        )}
                    </div>
                    
                    <div className={`w-full ${isMobile ? 'h-[500px]' : 'h-[1000px]'} overflow-auto`}>
                        {/* Use object tag instead of iframe for better cross-device compatibility */}
                        <object
                            data="/downloads/My CV.pdf"
                            type="application/pdf"
                            className="w-full h-full"
                        >
                            <div className="flex flex-col items-center justify-center p-6 text-center">
                                <p className="mb-4">Your browser cannot display the PDF directly.</p>
                                <DownloadButton link={"/downloads/My CV.pdf"} isDarkMode={isDarkMode}>
                                    Download PDF
                                    <DownloadIcon />
                                </DownloadButton>
                            </div>
                        </object>
                    </div>
                </div>

                {/* Download buttons - responsive layout */}
                <div className="flex flex-col w-full max-w-5xl sm:flex-row gap-3 justify-center">
                    <DownloadButton link={"/downloads/My CV.docx"} isDarkMode={isDarkMode}>
                        Download DOCX
                        <FileText className="w-5 h-5" />
                    </DownloadButton>
                    <DownloadButton link={"/downloads/My CV.pdf"} isDarkMode={isDarkMode}>
                        Download PDF
                        <DownloadIcon className="w-5 h-5" />
                    </DownloadButton>
                    <DownloadButton link={"/downloads/My CV.png"} isDarkMode={isDarkMode}>
                        Download PNG
                        <ImageIcon className="w-5 h-5" />
                    </DownloadButton>
                </div>
            </div>
        </Layout>
    );
}