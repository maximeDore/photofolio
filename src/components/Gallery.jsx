import { useState } from "react";

import GalleryTab from "./GalleryTab";
import GalleryTabUnsplash from "./GalleryUnsplashTab";
import Button from "./Button";

import { unsplash } from "../assets";

const Gallery = () => {
	const [isUnsplash, setIsUnsplash] = useState(false);

	const disableUnsplash = () => {
		setIsUnsplash(false);
	};
	const enableUnsplash = () => {
		setIsUnsplash(true);
	};

	return (
		<section id="galerie" className="bg-black">
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
			<div className="wrap padd overflow-hidden">
				<div className="wrapper">{!isUnsplash ? <GalleryTab /> : <GalleryTabUnsplash />}</div>
			</div>
		</section>
	);
};

export default Gallery;
