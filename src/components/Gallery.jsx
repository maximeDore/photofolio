// Hooks
import { useState } from "react";
// Components
import GalleryTab from "./GalleryTab";
import GalleryTabUnsplash from "./GalleryUnsplashTab";
import Button from "./Button";
// Gallery data
import { gallery } from "../gallery";
// Unsplash Icon
import { unsplash } from "../assets";

// TODO: Ajouter un hash à l'URL et ouvrir l'image concernée au load

const Gallery = () => {
	const [isUnsplash, setIsUnsplash] = useState(false);
	const [isUnsplashLoaded, setIsUnsplashLoaded] = useState(false);

	const disableUnsplash = () => {
		setIsUnsplash(false);
	};
	const enableUnsplash = () => {
		setIsUnsplash(true);
		setIsUnsplashLoaded(true);
	};

	return (
		<section id="galerie" className="bg-black">
			{/* Gallery nav */}
			<div className="absolute w-0 left-0 top-[var(--padd)] bottom-[var(--padd)] z-[9]">
				<div className="sticky top-[100px]">
					<div className="gallery__tabs flex">
						<Button
							className={`gallery__button button button--white button--sideways ${
								!isUnsplash ? "button--active" : ""
							}`}
							onClick={disableUnsplash}
							line="left"
							text="Galerie"
						/>
						<Button
							className={`gallery__button button button--white button--sideways ${
								isUnsplash ? "button--active" : ""
							}`}
							onClick={enableUnsplash}
							text="Unsplash"
							icon={unsplash}
						/>
					</div>
				</div>
			</div>

			{/* Gallery content */}
			<div className="wrap padd overflow-hidden">
				<div className="wrapper">
					{/* Regular gallery */}
					<div className={`gallery__tab ${!isUnsplash ? "" : "tab--hidden"}`}>
						<GalleryTab source={gallery} />
					</div>
					{/* Unsplash gallery */}
					<div className={`gallery__tab ${isUnsplash ? "" : "tab--hidden"}`}>
						<div className="wrapper">{isUnsplashLoaded && <GalleryTab source="unsplash" />}</div>
					</div>
					{/* TODO: Intégrer l'API Instagram pour un tab de feed custom */}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
