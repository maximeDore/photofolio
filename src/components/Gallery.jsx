import { useState } from "react";

import GalleryTab from "./GalleryTab";
import GalleryTabUnsplash from "./GalleryTabUnsplash";

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
			<div className="gallery__tabs absolute left-0 top-[var(--padd)] bottom-[var(--padd)] z-[9]">
				<div className="sticky top-[150px]">
					<button type="button" className={`gallery__button`} onClick={disableUnsplash}>
						<span className="button__text"></span>
						<span className="button__line">Galerie</span>
					</button>
					<button type="button" className={`gallery__button`} onClick={enableUnsplash}>
						<span className="button__text"></span>
						<span className="button__line">Unsplash</span>
					</button>
				</div>
			</div>
			<div className="wrap padd overflow-hidden">
				<div className="wrapper">{!isUnsplash ? <GalleryTab /> : <GalleryTabUnsplash />}</div>
			</div>
		</section>
	);
};

export default Gallery;
