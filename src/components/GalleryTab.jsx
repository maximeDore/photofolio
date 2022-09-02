import GalleryItem from "./GalleryItem";
import Spinner from "./Spinner";

import React, { useEffect, useState } from "react";

import { createApi } from "unsplash-js";

const unsplash_access = "8sTE-SoLOIgv4NGA7NoyQ-PLy8N24rpsWfZZK71AqPA";

const api = createApi({
	// Don't forget to set your access token here!
	// See https://unsplash.com/developers
	accessKey: unsplash_access,
});

const GalleryTab = () => {
	const [data, setPhotosResponse] = useState(null);

	useEffect(() => {
		api.users
			.getPhotos({
				username: "maxime_dore",
				page: 1,
				perPage: 10,
				orderBy: "popular",
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
			<div className="gallery gallery--unsplash">
				{data.response.results.map((photo) => (
					<GalleryItem key={photo.id} photo={photo} />
				))}
			</div>
		);
	}
};

export default GalleryTab;
