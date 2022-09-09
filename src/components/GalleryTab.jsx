import { useState, useEffect, useCallback } from "react";

import GalleryItem from "./GalleryItem";

import { gallery } from "../gallery";

// TODO: Combiner GalleryTab et GalleryUnsplashTab

const GalleryTab = () => {
	const [activeID, setActiveID] = useState(null);

	// Sort gallery by date
	gallery.sort((a, b) => b.date - a.date);

	const deactivatePhoto = () => {
		setActiveID(null);
	};

	const handleKeyDown = useCallback((e) => {
		if (activeID !== null && e.key) {
			if (e.key === "ArrowLeft" && activeID > 0) {
				setActiveID(activeID - 1);
			} else if (e.key === "ArrowRight" && activeID < gallery.length - 1) {
				setActiveID(activeID + 2);
			} else if (e.key === "Escape") {
				deactivatePhoto();
			}
		}
	});

	// Keydown event
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			// Cleanup
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [activeID]);

	return (
		<div className="gallery">
			{gallery.map((photo, index) => (
				<GalleryItem
					key={photo.id}
					photo={photo}
					onActivate={setActiveID}
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
