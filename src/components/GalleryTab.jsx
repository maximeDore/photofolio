import GalleryItem from "./GalleryItem";

import { gallery } from "../gallery";

const GalleryTab = () => (
	<div className="gallery">
		{gallery.map((photo) => (
			<GalleryItem key={photo.id} photo={photo} />
		))}
	</div>
);

export default GalleryTab;
