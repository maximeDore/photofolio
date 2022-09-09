import GalleryUnsplashItem from "./GalleryUnsplashItem";
import Spinner from "./Spinner";
import Button from "./Button";

import { unsplash } from "../assets";

import { useEffect, useState, useCallback } from "react";

import { createApi } from "unsplash-js";

const unsplash_access = "8sTE-SoLOIgv4NGA7NoyQ-PLy8N24rpsWfZZK71AqPA";

const api = createApi({
	// Don't forget to set your access token here!
	// See https://unsplash.com/developers
	accessKey: unsplash_access,
});

const GalleryUnsplashTab = () => {
	const [data, setPhotosResponse] = useState(null);
	const [activeID, setActiveID] = useState(null);

	const setActivePhoto = (newID) => {
		setActiveID(newID);
	};
	const deactivatePhoto = () => {
		setActiveID(null);
	};

	const handleKeyDown = useCallback((e) => {
		if (activeID !== null && e.key && data !== null) {
			if (e.key === "ArrowLeft" && activeID > 0) {
				setActiveID(activeID - 1);
			} else if (e.key === "ArrowRight" && activeID < data.response.results.length - 1) {
				setActiveID(activeID + 2);
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

	useEffect(() => {
		api.users
			.getPhotos({
				username: "maxime_dore",
				page: 1,
				perPage: 30,
				orderBy: "popular", // latest, oldest, popular, views, downloads
				orientation: "landscape",
			})
			.then((result) => {
				setPhotosResponse(result);
			})
			.catch(() => {
				console.warning("something went wrong!");
			});
	}, []);

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
};

export default GalleryUnsplashTab;
