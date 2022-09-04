import GalleryItem from "./GalleryItem";

import { gallery } from "../gallery";

const GalleryTab = () => (
	<div className="gallery gallery--unsplash">
		{gallery.map((photo) => (
			<GalleryItem key={photo} photo={photo} />
		))}
	</div>
);

export default GalleryTab;
