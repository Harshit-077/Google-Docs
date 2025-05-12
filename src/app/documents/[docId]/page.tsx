import { Editor } from "./editor";
import { Toolbar } from "./toolbar";
interface DocumentPageProps {
    params: Promise< {docId: string} >;
}
const nested = async ({ params } : DocumentPageProps) => {
    const { docId } = await params;
    return (
        <div className="min-h-screen bg-[#fafbfd]">
            <Toolbar/>
            <Editor />
        </div>
    );
}
export default nested;