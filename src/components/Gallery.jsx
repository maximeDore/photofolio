import { useState } from "react";

import GalleryTab from "./GalleryTab";
import GalleryTabUnsplash from "./GalleryUnsplashTab";
import Button from "./Button";

import { unsplash } from "../assets";

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
			<div className=" wrap padd overflow-hidden">
				<div className="wrapper">
					{/* Regular gallery */}
					<div className={`gallery__tab ${!isUnsplash ? "" : "tab--hidden"}`}>
						<GalleryTab />
					</div>
					{/* Unsplash gallery */}
					<div className={`gallery__tab ${isUnsplash ? "" : "tab--hidden"}`}>
						<div className="wrapper">{isUnsplashLoaded && <GalleryTabUnsplash />}</div>
					</div>
					{/* TODO: Intégrer l'API Instagram pour un tab de feed custom */}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
