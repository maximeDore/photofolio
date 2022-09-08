import { useState } from "react";

import { chevronLeft, chevronRight, info, calendar } from "../assets";

const GalleryUnsplashItem = ({ photo, onActivate, onDeactivate, isActive, galleryLength, index }) => {
	const { id, src, location, description, width, height, color, date } = photo;

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
			{/* TODO: Ajouter une navigation clavier */}
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
				<div className="relative flex justify-center">
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
					<div className="item__infos absolute bottom-0 left-0 right-0 flex justify-between items-center">
						{location !== "" && <p className="item__location px-4 py-3 opacity-75">{location}</p>}
						<div className="flex items-center px-2">
							{date && (
								<div className="item__info relative px-2 py-3 cursor-help z-[2]">
									<img src={calendar} width="16" height="16" alt="info" className="opacity-75" />
									<div className="item__description p-4 absolute bottom-[125%] -right-[20px] ss:w-[400px] w-[90vw] max-w-[200px] shadow-md bg-white text-black text-center capitalize">
										{date && <p>{date.toLocaleDateString("fr-CA", { year: "numeric", month: "long" })}</p>}
									</div>
								</div>
							)}
							{description !== "" && (
								<div className="item__info relative px-2 py-3 cursor-help z-[2]">
									<img src={info} width="16" height="16" alt="info" className="opacity-75" />
									<p className="item__description p-4 absolute bottom-[125%] -right-[20px] ss:w-[400px] w-[90vw] bg-white text-black">
										{description}
									</p>
								</div>
							)}
						</div>
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
