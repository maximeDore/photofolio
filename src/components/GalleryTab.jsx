// Hooks
import { useState, useEffect, useCallback } from "react";
// Components
import GalleryItem from "./GalleryItem";
import Button from "./Button";
// Utilities
import { LazyLoadComponent } from "react-lazy-load-image-component";
// Unsplash icon
import { unsplash } from "../assets";

// TODO: Infinite scroll

const GalleryTab = ({ source, type }) => {
	// Image popup state
	const [activeID, setActiveID] = useState(null);
	// Size of the data response or gallery object

	if (source.length && source[0].date) {
		// Sort gallery by date
		source.sort((a, b) => b.date - a.date);
	}

	const setActivePhoto = (newID) => {
		setActiveID(newID);
	};
	const deactivatePhoto = () => {
		setActiveID(null);
	};

	const handleKeyDown = useCallback((e) => {
		if (activeID !== null && e.key) {
			if (e.key === "ArrowLeft" && activeID > 0) {
				setActivePhoto(activeID - 1);
			} else if (e.key === "ArrowRight" && activeID < source.length - 1) {
				setActivePhoto(activeID + 1);
			} else if (e.key === "Escape") {
				deactivatePhoto();
			}
		}
	});

	// Trigger scroll on load
	useEffect(() => {
		window.dispatchEvent(new CustomEvent("scroll"));
	}, []);

	// Keydown event
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			// Cleanup
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [activeID]);

	return (
		<LazyLoadComponent>
			<div className={`gallery ${type && "gallery--" + type}`}>
				{source.map((photo, index) => (
					<GalleryItem
						key={photo.id ?? index}
						photo={photo}
						type={type}
						onActivate={setActivePhoto}
						onDeactivate={deactivatePhoto}
						isActive={activeID === index}
						galleryLength={source.length - 1}
						index={index}
					/>
				))}
			</div>
			{type === "unsplash" && (
				<div className="gallery__cta relative flex justify-center items-center z-[1] bg-black -mt-[100px] mb-32 sm:mb-0">
					<Button
						href={source[0].user.links.html}
						className="button--white"
						icon={unsplash}
						target="_blank"
						text="Voir tout sur Unsplash"
					/>
				</div>
			)}
		</LazyLoadComponent>
	);
};

export default GalleryTab;
