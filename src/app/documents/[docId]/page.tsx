import { Editor } from "./editor";
interface DocumentPageProps {
    params: Promise< {docId: string} >;
}
const nested = async ({ params } : DocumentPageProps) => {
    const { docId } = await params;
    return (
        <div className="min-h-screen bg-[#fafbfd]">
        <Editor />
        </div>
    );
}
export default nested;