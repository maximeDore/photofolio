// Hooks
import { useState, useEffect } from "react";
// Components
import Spinner from "./Spinner";
import GalleryTab from "./GalleryTab";
import Button from "./Button";
// Gallery data
import { gallery } from "../gallery";
// const dump = import.meta.env.DEV ? import.meta.glob("/public/dump/*.jpg") : import.meta.glob("/dump/*.jpg");

const dumpImages = import.meta.glob('/public/dump/*.jpg');
// const dumpImages = import.meta.glob('/public/dump/*.jpg');
const dump = [];

for (const path in dumpImages) {
	dumpImages[path]().then(() => {
		const p = new URL(path, import.meta.url)
		dump.push(p)
	})
}
// for (const path in dumpImages) {
// 	const p = new URL(path, import.meta.url)
// 	dump.push(p)
// }

// Unsplash API key
const unsplash_access = "8sTE-SoLOIgv4NGA7NoyQ-PLy8N24rpsWfZZK71AqPA";
// Unsplash icon
import { unsplash } from "../assets";
// Unsplash API plugin
import { createApi } from "unsplash-js";
// Unsplash API
const api = createApi({
	accessKey: unsplash_access,
});

// TODO: Ajouter un hash à l'URL et ouvrir l'image concernée au load

const Gallery = () => {
	const [activeTab, setActiveTab] = useState("portfolio");
	// Unsplash API data state
	const [data, setPhotosResponse] = useState(null);

	const changeTab = (slug) => {
		setActiveTab(slug);
		window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
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
		<section id="galerie" className="bg-black min-h-screen">
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
						{data === null || data.response === null ? <Spinner /> : <GalleryTab source={data.response.results} type="unsplash" />}
					</div>
					{/* TODO: Intégrer l'API Instagram pour un tab de feed custom */}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
