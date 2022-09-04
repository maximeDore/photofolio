import { useState } from "react";

import { unsplash } from "../assets";

const GalleryUnsplashItem = ({ photo }) => {
	const { src, location, description, width, height, color } = photo;

	const [isLoaded, setIsLoaded] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const toggleIsActive = () => {
		setIsActive((isActive) => !isActive);
	};
	const toggleIsLoaded = () => {
		setIsLoaded((isLoaded) => !isLoaded);
	};

	return (
		<div className={`gallery__item ${isActive ? "is-active" : ""}`} style={{ backgroundColor: color }}>
			{/* Image */}
			<img
				src={src}
				// width={width}
				// height={height}
				alt=""
				className={`max-h-[100%] w-full object-cover cursor-zoom-in ${isLoaded ? "opacity-100" : "opacity-0"}`}
				loading="lazy"
				onLoad={toggleIsLoaded}
				onClick={toggleIsActive}
				onContextMenu={(e) => {
					e.preventDefault();
				}}
			/>
			{/* Popup */}
			<div
				className={`item__popup fixed top-0 left-0 w-full h-full ${
					isActive ? "is-active" : ""
				} flex justify-center items-center pt-6 pb-6 wrap z-[9999] cursor-zoom-out`}
				onClick={toggleIsActive}
			>
				<div className="relative flex justify-center items-center">
					<img
						src={src}
						// width={width}
						// height={height}
						alt=""
						className="item__popup-img max-h-[95vh] w-auto object-cover"
						loading="lazy"
						onContextMenu={(e) => {
							e.preventDefault();
						}}
					/>
					<div className="item__infos absolute bottom-0 left-0 right-0 flex justify-between align-center p-4 opacity-50">
						{location !== "" && <p className="item__location">{location}</p>}
					</div>
					<div className="item__sub-infos absolute top-full left-0 right-0 flex justify-center p-4">
						{description !== "" && <p className="item__description">{description}</p>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GalleryUnsplashItem;
