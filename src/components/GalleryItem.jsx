import { useState } from "react";

import { unsplash } from "../assets";

const GalleryUnsplashItem = ({ photo }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const toggleIsActive = () => {
		setIsActive((isActive) => !isActive);
	};
	const toggleIsLoaded = () => {
		setIsLoaded((isLoaded) => !isLoaded);
	};

	return (
		<div className={`gallery__item bg-dark ${isActive ? "is-active" : ""}`}>
			{/* Image */}
			<img
				src={photo}
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
						src={photo}
						// width={width}
						// height={height}
						alt=""
						className="item__popup-img max-h-[95vh] w-auto object-cover"
						loading="lazy"
						onContextMenu={(e) => {
							e.preventDefault();
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default GalleryUnsplashItem;
