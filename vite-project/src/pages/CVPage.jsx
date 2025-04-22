import Layout from "../components/Layout";
import { useDarkMode } from "../contexts/DarkModeContext"; // Assuming this is where your useDarkMode hook is
import MyButton from "../components/MyButton"; // Assuming MyButton is a custom component
import { DownloadIcon, FileText, ImageDownIcon } from "lucide-react";
import DownloadButton from "../components/DownloadButton";
import { Button, Badge } from "@material-tailwind/react";

export default function CVPage() {
    const { isDarkMode } = useDarkMode();


    const handleDownloadPdf = () => {
        // Download logic for PDF format
        const link = document.createElement("a");
        link.href = "/public/downloads/My CV.pdf";
        link.download = "My CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Layout>
            <div className="flex flex-col items-center w-full h-full gap-6 py-8">
                {/* PDF Viewer */}
                <div className="w-full max-w-5xl h-[1100px]">
                    <iframe
                        src={`/public/downloads/My CV.pdf`}
                        className="w-full h-full border border-gray-300 rounded"
                        title="CV Preview"
                    />
                </div>

                {/* Download buttons */}
                <div className="flex flex-col md:flex-row gap-4">
                    <DownloadButton link={"/public/downloads/My CV.docx"} isDarkMode={isDarkMode}>
                        Download DOCX
                        {<FileText />}
                    </DownloadButton>
                    <DownloadButton link={"/public/downloads/My CV.pdf"} isDarkMode={isDarkMode}>
                        Download PDF
                        {<DownloadIcon />}
                    </DownloadButton>
                    <DownloadButton link={"/public/downloads/My CV.png"} isDarkMode={isDarkMode}>
                        Download PNG
                        <ImageDownIcon />
                    </DownloadButton>
                </div>
            </div>
        </Layout>
    );
}