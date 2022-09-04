import GalleryUnsplashItem from "./GalleryUnsplashItem";
import Spinner from "./Spinner";
import Button from "./Button";

import { unsplash } from "../assets";

import { useEffect, useState } from "react";

import { createApi } from "unsplash-js";

const unsplash_access = "8sTE-SoLOIgv4NGA7NoyQ-PLy8N24rpsWfZZK71AqPA";

const api = createApi({
	// Don't forget to set your access token here!
	// See https://unsplash.com/developers
	accessKey: unsplash_access,
});

const GalleryUnsplashTab = () => {
	const [data, setPhotosResponse] = useState(null);

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
					{data.response.results.map((photo) => (
						<GalleryUnsplashItem key={photo.id} photo={photo} />
					))}
				</div>
				<div className="gallery__cta relative flex justify-center items-center mt-20 z-[1]">
					<Button className="button--white" icon={unsplash} text="Voir tout sur Unsplash" />
				</div>
			</>
		);
	}
};

export default GalleryUnsplashTab;
