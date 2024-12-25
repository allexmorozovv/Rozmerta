import GalleryPage from "@/src/widgets/GalleryPage";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Gallery | Rozmerta",
	description: "Gallery of Restaurant Rozmerta",
};

const Gallery = () => {
	return (
		<div>
			<GalleryPage />
		</div>
	);
};

export default Gallery;
