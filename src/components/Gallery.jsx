// Hooks
import { useState, useEffect } from "react";
// Components
import Spinner from "./Spinner";
import GalleryTab from "./GalleryTab";
import Button from "./Button";
// Gallery data
import { gallery } from "../gallery";

// Unsplash API key
const unsplash_access = "8sTE-SoLOIgv4NGA7NoyQ-PLy8N24rpsWfZZK71AqPA";
// Unsplash icon
import { unsplash } from "../assets";
// Unsplash API plugin
import { createApi } from "unsplash-js";
// Unsplash API
const api = createApi({
	// Don't forget to set your access token here!
	// See https://unsplash.com/developers
	accessKey: unsplash_access,
});

// TODO: Ajouter un hash à l'URL et ouvrir l'image concernée au load

const Gallery = () => {
	const [isUnsplash, setIsUnsplash] = useState(false);
	// Unsplash API data state
	const [data, setPhotosResponse] = useState(null);

	const disableUnsplash = () => {
		setIsUnsplash(false);
	};
	const enableUnsplash = () => {
		setIsUnsplash(true);
	};

	useEffect(() => {
		// Unsplash API Call
		api.users
			.getPhotos({
				username: "maxime_dore",
				page: 1,
				perPage: 30,
				orderBy: "popular", // latest, oldest, popular, views, downloads
			})
			.then((result) => {
				setPhotosResponse(result);
			})
			.catch((e) => {
				console.log("Une erreur s'est produite en appelant l'API Unsplash.", e);
			});
	}, []);

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
						<div className="wrapper">
							{data === null ? <Spinner /> : <GalleryTab source={data.response.results} type="unsplash" />}
						</div>
					</div>
					{/* TODO: Intégrer l'API Instagram pour un tab de feed custom */}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
