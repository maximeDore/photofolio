import { useState } from "react";

const GalleryUnsplashItem = ({ photo, onActivate, onDeactivate, isActive, galleryLength }) => {
	const { id, src, location, description, width, height, color } = photo;

	const [isLoaded, setIsLoaded] = useState(false);
	// const [isActive, setIsActive] = useState(false);

	const toggleIsLoaded = () => {
		setIsLoaded((isLoaded) => !isLoaded);
	};

	return (
		<div className={`gallery__item ${isActive ? "is-active" : ""}`} style={{ backgroundColor: color }}>
			{/* Image */}
			<img
				src={src}
				width={width > 0 && width}
				height={height > 0 && height}
				alt=""
				className={`max-h-[100%] w-full object-cover cursor-zoom-in ${isLoaded ? "opacity-100" : "opacity-0"}`}
				loading="lazy"
				onLoad={toggleIsLoaded}
				onClick={() => onActivate(id)}
				onContextMenu={(e) => {
					e.preventDefault();
				}}
			/>
			{/* Popup */}
			<div
				className={`item__popup fixed top-0 left-0 w-full h-full ${
					isActive ? "is-active" : ""
				} flex justify-center items-center pt-6 pb-6 wrap z-[9999] cursor-zoom-out`}
				onClick={onDeactivate}
			>
				{/* Prev */}
				{id > 0 && (
					<button
						className="item__nav nav--prev absolute left-0 top-0 bottom-0 p-6 flex items-center justify-center z-[1]"
						onClick={(e) => {
							e.stopPropagation();
							onActivate(id - 1);
						}}
					>
						&lt;
					</button>
				)}
				<div className="relative flex justify-center items-center">
					<img
						src={src}
						width={width > 0 && width}
						height={height > 0 && height}
						alt=""
						className="item__popup-img max-h-[95vh] w-auto object-cover"
						loading="lazy"
						onContextMenu={(e) => {
							e.preventDefault();
						}}
					/>
					{/* TODO: Contraster peu importe l'image */}
					<div className="item__infos absolute bottom-0 left-0 right-0 flex justify-between align-center p-4 opacity-50">
						{location !== "" && <p className="item__location">{location}</p>}
					</div>
					{/* TODO: Styler la description */}
					<div className="item__sub-infos absolute top-full left-0 right-0 flex justify-center p-4">
						{description !== "" && <p className="item__description">{description}</p>}
					</div>
				</div>
				{/* Next */}
				{id < galleryLength && (
					<button
						className="item__nav nav--next absolute right-0 top-0 bottom-0 p-6 flex items-center justify-center z-[1]"
						onClick={(e) => {
							e.stopPropagation();
							onActivate(id + 1);
						}}
					>
						&gt;
					</button>
				)}
			</div>
		</div>
	);
};

export default GalleryUnsplashItem;
