// Hooks
import { useState, useEffect } from "react";
// Components
import Spinner from "./Spinner";
import GalleryTab from "./GalleryTab";
import Button from "./Button";
// Gallery data
import { gallery } from "../gallery";
import { dump } from "/dump";

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
	const [activeTab, setActiveTab] = useState("portfolio");
	// Unsplash API data state
	const [data, setPhotosResponse] = useState(null);

	const changeTab = (slug) => {
		setActiveTab(slug);
	}

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
					<div className="gallery__tabs flex whitespace-nowrap">
						<Button
							className={`gallery__button button button--white button--sideways ${
								activeTab == "portfolio" ? "button--active" : ""
							}`}
							onClick={() => { changeTab("portfolio") }}
							line="right"
							text="Galerie"
						/>
						{dump.length > 0 &&
						<Button
							className={`gallery__button button button--white button--sideways ${
								activeTab == "bloc-hop" ? "button--active" : ""
							}`}
							onClick={() => { changeTab("bloc-hop") }}
							line="right"
							text="Bloc-Hop"
						/>
						}
						<Button
							className={`gallery__button button button--white button--sideways ${
								activeTab == "unsplash" ? "button--active" : ""
							}`}
							onClick={() => { changeTab("unsplash") }}
							icon={unsplash}
							text="Unsplash"
						/>
					</div>
				</div>
			</div>

			{/* Gallery content */}
			<div className="wrap padd overflow-hidden">
				<div className="wrapper">
					{/* Regular gallery */}
					{gallery.length > 0 &&
						<div className={`gallery__tab ${activeTab == "portfolio" ? "" : "tab--hidden"}`}>
							<GalleryTab source={gallery} />
						</div>
						}
					{/* Event gallery */}
					{dump.length > 0 &&
						<div className={`gallery__tab ${activeTab == "bloc-hop" ? "" : "tab--hidden"}`}>
							<GalleryTab source={dump} type="dump" />
						</div>
					}
					{/* Unsplash gallery */}
					<div className={`gallery__tab ${activeTab == "unsplash" ? "" : "tab--hidden"}`}>
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
