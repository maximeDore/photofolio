import { useState } from "react";

import GalleryItem from "./GalleryItem";

import { gallery } from "../gallery";

const GalleryTab = () => {
	const [activeID, setActiveID] = useState(null);

	const setActivePhoto = (newID) => {
		setActiveID(newID);
	};
	const deactivatePhoto = () => {
		setActiveID(null);
	};

	return (
		<div className="gallery">
			{gallery.map((photo) => (
				<GalleryItem
					key={photo.id}
					photo={photo}
					onActivate={setActivePhoto}
					onDeactivate={deactivatePhoto}
					isActive={activeID === photo.id}
					galleryLength={gallery.length}
				/>
			))}
		</div>
	);
};

export default GalleryTab;
