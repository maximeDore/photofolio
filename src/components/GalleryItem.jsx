const GalleryItem = ({ photo }) => {
	const { user, urls } = photo;

	return (
		<div className="gallery__item">
			<img src={urls.regular} alt="" />
			{/* <a className="credit" target="_blank" href={`https://unsplash.com/@${user.username}`}>
				{user.name}
			</a> */}
		</div>
	);
};

export default GalleryItem;
