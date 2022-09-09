// Hooks
import { useState, useEffect, useCallback } from "react";
// Components
import GalleryItem from "./GalleryItem";
import GalleryUnsplashItem from "./GalleryUnsplashItem";
import Spinner from "./Spinner";
import Button from "./Button";
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

const GalleryTab = ({ source }) => {
	// Unsplash API data state
	const [data, setPhotosResponse] = useState(null);
	// Image popup state
	const [activeID, setActiveID] = useState(null);
	// Size of the data response or gallery object
	let dataSize = 0;

	if (typeof source === "object") {
		// Sort gallery by date
		source.sort((a, b) => b.date - a.date);
		dataSize = source.length;
	} else if (source == "unsplash") {
		useEffect(() => {
			api.users
				.getPhotos({
					username: "maxime_dore",
					page: 1,
					perPage: 30,
					orderBy: "popular", // latest, oldest, popular, views, downloads
				})
				.then((result) => {
					setPhotosResponse(result);
					dataSize = result.response.results.length;
				})
				.catch((e) => {
					console.log("Une erreur s'est produite en appelant l'API Unsplash.", e);
				});
		}, []);
	}

	const setActivePhoto = (newID) => {
		setActiveID(newID);
	};
	const deactivatePhoto = () => {
		setActiveID(null);
	};

	const handleKeyDown = useCallback((e) => {
		if (activeID !== null && e.key) {
			if (e.key === "ArrowLeft" && activeID > 0) {
				setActivePhoto(activeID - 1);
			} else if (e.key === "ArrowRight" && activeID < dataSize - 1) {
				setActivePhoto(activeID + 1);
			} else if (e.key === "Escape") {
				deactivatePhoto();
			}
		}
	});

	// Keydown event
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			// Cleanup
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [activeID]);

	if (typeof source === "object") {
		return (
			<div className="gallery">
				{source.map((photo, index) => (
					<GalleryItem
						key={photo.id}
						photo={photo}
						onActivate={setActivePhoto}
						onDeactivate={deactivatePhoto}
						isActive={activeID === index}
						galleryLength={dataSize - 1}
						index={index}
					/>
				))}
			</div>
		);
	} else if (source === "unsplash") {
		if (data === null) {
			return <Spinner />;
		} else {
			// console.log(data.response.results[0]);
			return (
				<>
					<div className="gallery gallery--unsplash">
						{data.response.results.map((photo, index) => (
							<GalleryUnsplashItem
								key={photo.id}
								photo={photo}
								onActivate={setActivePhoto}
								onDeactivate={deactivatePhoto}
								isActive={activeID === index}
								galleryLength={data.response.results.length - 1}
								index={index}
							/>
						))}
					</div>
					<div className="gallery__cta relative flex justify-center items-center mt-20 z-[1]">
						<Button
							href={data.response.results[0].user.links.html}
							className="button--white"
							icon={unsplash}
							target="_blank"
							text="Voir tout sur Unsplash"
						/>
					</div>
				</>
			);
		}
	}
};

export default GalleryTab;
