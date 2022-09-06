import { useState } from "react";

import GalleryItem from "./GalleryItem";

import { gallery } from "../gallery";

const GalleryTab = () => {
	const [activeID, setActiveID] = useState(null);

	// Sort gallery by date
	gallery.sort((a, b) => b.date - a.date);

	const setActivePhoto = (newID) => {
		setActiveID(newID);
	};
	const deactivatePhoto = () => {
		setActiveID(null);
	};

	return (
		<div className="gallery">
			{gallery.map((photo, index) => (
				<GalleryItem
					key={photo.id}
					photo={photo}
					onActivate={setActivePhoto}
					onDeactivate={deactivatePhoto}
					isActive={activeID === index}
					galleryLength={gallery.length - 1}
					index={index}
				/>
			))}
		</div>
	);
};

export default GalleryTab;
