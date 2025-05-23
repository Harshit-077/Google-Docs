import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Toolbar } from "./toolbar";
interface DocumentPageProps {
    params: Promise<{ docId: string }>;
}
const nested = async ({ params }: DocumentPageProps) => {
    const { docId } = await params;
    return (
        <div className="min-h-screen bg-[#fafbfd]">
            <div className="flex flex-col px-4 pt-2 gap-2 fixed top-0 left-0 right-0 bg-[#fafbfd] z-10 print:hidden">
                <Navbar />
                <Toolbar />
            </div>
            <div className="pt-[114px] print:pt-0">
                <Editor />
            </div>
        </div>
    );
}
export default nested;