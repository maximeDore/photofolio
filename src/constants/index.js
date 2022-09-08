import { instagram, linkedin, unsplash } from "../assets";

export const navLinks = [
	{
		id: 1,
		htmlID: "accueil",
		title: "Accueil",
		popup: null,
	},
	{
		id: 2,
		htmlID: "galerie",
		title: "Galerie",
		popup: null,
	},
	// {
	// 	id: 3,
	// 	htmlID: "about",
	// 	title: "À propos de moi",
	// 	popup: "about",
	// },
	{
		id: 4,
		htmlID: "",
		title: "Contact",
		popup: "contact",
	},
];

export const socialMedia = [
	{
		id: "social-media-1",
		icon: instagram,
		link: "https://www.instagram.com/a_colorblind_photographer/",
		name: "Instagram",
	},
	{
		id: "social-media-2",
		icon: unsplash,
		link: "https://unsplash.com/@maxime_dore",
		name: "Unsplash",
	},
	{
		id: "social-media-3",
		icon: linkedin,
		link: "https://www.linkedin.com/in/maxime-dore/",
		name: "Linkedin",
	},
];
