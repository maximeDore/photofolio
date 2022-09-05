import { useState } from "react";

import { chevronLeft, chevronRight, info } from "../assets";

const GalleryUnsplashItem = ({ photo, onActivate, onDeactivate, isActive, galleryLength, index }) => {
	const { id, src, location, description, width, height, color } = photo;

	const [isLoaded, setIsLoaded] = useState(false);
	// const [isActive, setIsActive] = useState(false);

	const toggleIsLoaded = () => {
		setIsLoaded((isLoaded) => !isLoaded);
	};

	return (
		<div
			className={`gallery__item ${isActive ? "is-active" : ""}`}
			style={{ backgroundColor: color }}
			data-index={index}
		>
			{/* Image */}
			<img
				src={src}
				width={width > 0 && width}
				height={height > 0 && height}
				alt=""
				className={`max-h-[100%] w-full object-cover cursor-zoom-in ${isLoaded ? "opacity-100" : "opacity-0"}`}
				loading="lazy"
				onLoad={toggleIsLoaded}
				onClick={() => onActivate(index)}
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
				{index > 0 && (
					<button
						className="item__nav nav--prev absolute left-0 ss:top-0 top-1/3 ss:bottom-0 bottom-1/3 p-6 flex items-center justify-center z-[1]"
						onClick={(e) => {
							e.stopPropagation();
							onActivate(index - 1);
						}}
					>
						<img src={chevronLeft} className="w-[16px] h-[27px]" width="16" height="27" alt="précédent" />
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
					<div className="item__infos absolute bottom-0 left-0 right-0 flex justify-between items-center">
						{location !== "" && <p className="item__location p-4 opacity-50">{location}</p>}
						{description !== "" && (
							<div className="item__info relative p-4 transition-opacity opacity-50 hover:opacity-100 cursor-help z-[2]">
								<img src={info} width="16" height="16" alt="info" />
								<p className="item__description p-4 absolute bottom-[110%] -right-[12px] ss:w-[400px] w-[90vw] bg-white text-black">
									{description}
								</p>
							</div>
						)}
					</div>
				</div>
				{/* Next */}
				{index < galleryLength && (
					<button
						className="item__nav nav--next absolute right-0 ss:top-0 top-1/3 ss:bottom-0 bottom-1/3 p-6 flex items-center justify-center z-[1]"
						onClick={(e) => {
							e.stopPropagation();
							onActivate(index + 1);
						}}
					>
						<img src={chevronRight} className="w-[16px] h-[27px]" width="16" height="27" alt="suivant" />
					</button>
				)}
			</div>
		</div>
	);
};

export default GalleryUnsplashItem;
