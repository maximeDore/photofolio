// import { eye } from "../assets";

const GalleryItem = ({ photo }) => {
	const { user, urls } = photo;

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

	return (
		<div className="gallery__item" style={{ backgroundColor: photo.color }}>
			{/* Image */}
			<img src={urls.regular} alt="" loading="lazy" />
			{/* Overlay */}
			{/* <div className="item__overlay flex justify-between align-bottom p-6" data-color={photo.color}></div> */}
		</div>
	);
};

export default GalleryItem;