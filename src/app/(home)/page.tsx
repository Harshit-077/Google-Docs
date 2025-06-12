"use client";
import { Navbar } from "./navbar";
import { DocumentsTable } from "./documents-table";
import { TemplateGallery } from "./template-gallery";
import { api } from "../../../convex/_generated/api";
import { useSearchParam } from "@/hooks/use-search-param";
import { usePaginatedQuery, useQuery } from "convex/react";

const Home = () => {
	const [search] = useSearchParam("search");
	const {
		results, 
		status, 
		loadMore
	} = usePaginatedQuery(api.documents.get, { search },{ initialNumItems : 5 })

	return (
		<div className="min-h-screen flex flex-col">
			<div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
				<Navbar />
			</div>
			<div className="mt-16">
				<TemplateGallery />
				<DocumentsTable
				documents={results}
				loadMore={loadMore}
				status={status}
				/>
			</div>
		</div>
	);
}
export default Home;