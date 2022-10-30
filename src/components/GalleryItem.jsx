import { useState } from "react";

import { unsplash, chevronLeft, chevronRight, info, calendar } from "../assets";

// TODO: Intégrer des vidéos

const GalleryUnsplashItem = ({ photo, type, onActivate, onDeactivate, isActive, galleryLength, index }) => {
	const { description, width, height, color, categories } = photo;

	const isUnsplash = type === "unsplash";
	const isDump = type === "dump";

	const thumbSrc = isUnsplash ? photo.urls.small : !isDump ? photo.src : null;
	const src = isUnsplash ? photo.urls.regular : !isDump ? photo.src : "/src/dump/" + photo.slice(2);
	const location = (isUnsplash || isDump) ? "" : photo.location;
	const date = photo.created_at ? new Date(photo.created_at) : isUnsplash ? photo.date : null;

	const [isLoaded, setIsLoaded] = useState(false);
	// const [isActive, setIsActive] = useState(false);

	const toggleIsLoaded = () => {
		setIsLoaded((isLoaded) => !isLoaded);
	};

	return (
		<div
			className={`group gallery__item ${isActive ? "is-active" : ""}`}
			style={{ backgroundColor: color ?? "var(--dark)" }}
			data-index={index}
		>
			{isDump > 0 && (
				<div 
					className="relative h-0 w-full pr-4 text-white drop-shadow-lg opacity-50 text-[30px] font-bold text-right 
						group-hover:opacity-0 transition-opacity z-2 transform-cpu"
				>{ (index + 1) }</div>
			)}
			{/* Image */}
			<img
				src={thumbSrc ?? src}
				width={(width && width > 0) && width}
				height={(height && height > 0) && height}
				alt=""
				className={`max-h-[100%] w-full object-cover cursor-zoom-in ${isLoaded ? "opacity-100" : "opacity-0"}`}
				loading="lazy"
				onLoad={toggleIsLoaded}
				onClick={() => onActivate(index)}
				onContextMenu={(e) => {
					e.preventDefault();
				}}
			/>
			{/* Popup */}
			<div
				className={`item__popup fixed top-0 left-0 w-full h-full ${
					isActive ? "is-active" : ""
				} flex justify-center items-center pt-6 pb-6 wrap z-[9999] cursor-zoom-out`}
				onClick={onDeactivate}
			>
				{/* Prev */}
				{index > 0 && (
					<button
						className="item__nav nav--prev absolute left-0 ss:top-0 top-1/3 ss:bottom-0 bottom-1/3 p-6 flex items-center justify-center z-[1]"
						onClick={(e) => {
							e.stopPropagation();
							onActivate(index - 1);
						}}
					>
						<img src={chevronLeft} width="16" height="27" alt="précédent" />
					</button>
				)}
				<div className="relative flex justify-center">
					<img
						src={src}
						width={(width && width > 0) && width}
						height={(height && height > 0) && height}
						alt=""
						className="item__popup-img max-h-[95vh] w-auto object-cover"
						loading="lazy"
						onContextMenu={(e) => {
							e.preventDefault();
						}}
					/>
					{isUnsplash ? (
						<div className="item__infos absolute bottom-0 left-0 right-0 flex justify-between align-bottom">
							<div className="flex">
								<a
									href={photo.links.html}
									className="transition-all shadow-md w-[40px] h-[40px] hover:shadow-lg hover:scale-125 rounded-tr-[30px] pt-1 pr-1 bg-white flex justify-center items-center"
									title="Visionner sur Unsplash"
									target="_blank"
								>
									<img src={unsplash} className=" w-[28px] h-[28px]" alt="unsplash" />
								</a>
							</div>
							<div className="flex">
								{date && (
									<div className="item__info relative px-2 py-3 cursor-help z-[2]">
										<img
											src={calendar}
											width="16"
											height="16"
											alt="info"
											className="opacity-75 transition-opacity hover:opacity-100"
										/>
										<div className="item__description p-4 absolute bottom-[125%] -right-[20px] ss:w-[400px] w-[90vw] max-w-[200px] shadow-md bg-white text-black text-center capitalize">
											{date && <p>{date.toLocaleDateString("fr-CA", { year: "numeric", month: "long" })}</p>}
										</div>
									</div>
								)}
								{description !== null && (
									<div className="item__info relative px-2 py-3 cursor-help z-[2]">
										<img
											src={info}
											width="16"
											height="16"
											alt="info"
											className="opacity-75 transition-opacity hover:opacity-100"
										/>
										<p className="item__description p-4 absolute bottom-[125%] -right-[20px] ss:w-[400px] w-[90vw] bg-white text-black text-center">
											{description}
										</p>
									</div>
								)}
								<a
									href={photo.user.links.html}
									className="transition-all shadow-md w-[40px] h-[40px] ml-2 hover:shadow-lg hover:scale-125 rounded-tl-[30px] block"
									title="Consulter mon profil Unsplash"
									target="_blank"
								>
									<img
										src={photo.user.profile_image.medium}
										className="w-[40px] h-[40px] rounded-tl-[30px]"
										alt="unsplash"
									/>
								</a>
							</div>
						</div>
					) : (
						<div className="item__infos absolute bottom-0 left-0 right-0 flex justify-between items-center">
							{location && location !== null && <p className="item__location px-4 py-3 opacity-75">{location}</p>}
							<div className="flex items-center px-2">
								{date && (
									<div className="item__info relative px-2 py-3 cursor-help z-[2]">
										<img
											src={calendar}
											width="16"
											height="16"
											alt="info"
											className="opacity-75 transition-opacity hover:opacity-100"
										/>
										<div className="item__description p-4 absolute bottom-[125%] -right-[20px] ss:w-[400px] w-[90vw] max-w-[200px] shadow-md bg-white text-black text-center capitalize">
											{date && <p>{date.toLocaleDateString("fr-CA", { year: "numeric", month: "long" })}</p>}
										</div>
									</div>
								)}
								{description && description !== null && (
									<div className="item__info relative px-2 py-3 cursor-help z-[2]">
										<img
											src={info}
											width="16"
											height="16"
											alt="info"
											className="opacity-75 transition-opacity hover:opacity-100"
										/>
										<p className="item__description p-4 absolute bottom-[125%] -right-[20px] ss:w-[400px] w-[90vw] bg-white text-black text-center">
											{description}
										</p>
									</div>
								)}
							</div>
						</div>
					)}
				</div>
				{/* Next */}
				{index < galleryLength && (
					<button
						className="item__nav nav--next absolute right-0 ss:top-0 top-1/3 ss:bottom-0 bottom-1/3 p-6 flex items-center justify-center z-[1]"
						onClick={(e) => {
							e.stopPropagation();
							onActivate(index + 1);
						}}
					>
						<img src={chevronRight} width="16" height="27" alt="suivant" />
					</button>
				)}
			</div>
		</div>
	);
};

export default GalleryUnsplashItem;

/* 
	const ex = { 
		id: "ko5SsTuOwmY", 
		created_at: "2021-12-19T16:42:07Z", 
		updated_at: "2022-08-31T17:26:09Z", 
		promoted_at: null, 
		width: 5184, 
		height: 2916, 
		color: "#262626", 
		blur_hash: "L58|q,~W9ZPBK%ELR5$*4nt7%gIU", 
		description: null, 
		alt_description: null, 
		urls: { 
			raw: "https://images.unsplash.com/photo-1639931561959-36ea34c1731f?ixid=MnwzNjAxNzl8MHwxfGFsbHwxfHx8fHx8Mnx8MTY2MTk2NzE4Nw&ixlib=rb-1.2.1", 
			full: "https://images.unsplash.com/photo-1639931561959-36ea34c1731f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjAxNzl8MHwxfGFsbHwxfHx8fHx8Mnx8MTY2MTk2NzE4Nw&ixlib=rb-1.2.1&q=80", 
			regular: 
				"https://images.unsplash.com/photo-1639931561959-36ea34c1731f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAxNzl8MHwxfGFsbHwxfHx8fHx8Mnx8MTY2MTk2NzE4Nw&ixlib=rb-1.2.1&q=80&w=1080", 
			small: "https://images.unsplash.com/photo-1639931561959-36ea34c1731f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAxNzl8MHwxfGFsbHwxfHx8fHx8Mnx8MTY2MTk2NzE4Nw&ixlib=rb-1.2.1&q=80&w=400", 
			thumb: "https://images.unsplash.com/photo-1639931561959-36ea34c1731f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAxNzl8MHwxfGFsbHwxfHx8fHx8Mnx8MTY2MTk2NzE4Nw&ixlib=rb-1.2.1&q=80&w=200", 
			small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1639931561959-36ea34c1731f", 
		}, 
		links: { 
			self: "https://api.unsplash.com/photos/ko5SsTuOwmY", 
			html: "https://unsplash.com/photos/ko5SsTuOwmY", 
			download: 
				"https://unsplash.com/photos/ko5SsTuOwmY/download?ixid=MnwzNjAxNzl8MHwxfGFsbHwxfHx8fHx8Mnx8MTY2MTk2NzE4Nw", 
			download_location: 
				"https://api.unsplash.com/photos/ko5SsTuOwmY/download?ixid=MnwzNjAxNzl8MHwxfGFsbHwxfHx8fHx8Mnx8MTY2MTk2NzE4Nw", 
		}, 
		categories: [], 
		likes: 3, 
		liked_by_user: false, 
		current_user_collections: [], 
		sponsorship: null, 
		topic_submissions: {}, 
		user: { 
			id: "bYXIqb54Ngo", 
			updated_at: "2022-08-31T14:06:57Z", 
			username: "maxime_dore", 
			name: "Maxime Doré", 
			first_name: "Maxime", 
			last_name: "Doré", 
			twitter_username: "DORMaxime", 
			portfolio_url: null, 
			bio: "Hobbyist colorblind photographer.\r\nFollow me on Instagram : @a_colorblind_photographer ", 
			location: "Québec, Canada", 
			links: { 
				self: "https://api.unsplash.com/users/maxime_dore", 
				html: "https://unsplash.com/@maxime_dore", 
				photos: "https://api.unsplash.com/users/maxime_dore/photos", 
				likes: "https://api.unsplash.com/users/maxime_dore/likes", 
				portfolio: "https://api.unsplash.com/users/maxime_dore/portfolio", 
				following: "https://api.unsplash.com/users/maxime_dore/following", 
				followers: "https://api.unsplash.com/users/maxime_dore/followers", 
			}, 
			profile_image: { 
				small: "https://images.unsplash.com/profile-1649707550025-5945c2fad903image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32", 
				medium: 
					"https://images.unsplash.com/profile-1649707550025-5945c2fad903image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64", 
				large: "https://images.unsplash.com/profile-1649707550025-5945c2fad903image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128", 
			}, 
			instagram_username: "a_colorblind_photographer", 
			total_collections: 1, 
			total_likes: 931, 
			total_photos: 89, 
			accepted_tos: true, 
			for_hire: true, 
			social: { 
				instagram_username: "a_colorblind_photographer", 
				portfolio_url: null, 
				twitter_username: "DORMaxime", 
				paypal_email: null, 
			}, 
		}, 
	}; 
*/
