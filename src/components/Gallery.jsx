import { useState } from "react";

import GalleryTab from "./GalleryTab";

const Gallery = () => {
	const [toggle, setToggle] = useState(false);

	if (!toggle) {
		return (
			<section id="galerie" className="padd wrap">
				<div className="wrapper">
					<GalleryTab />
				</div>
			</section>
		);
	} else {
		return (
			<section id="galerie" className="padd wrap">
				<div className="wrapper">
					<GalleryTab />
				</div>
			</section>
		);
	}
};

export default Gallery;
