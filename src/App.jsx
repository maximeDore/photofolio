import { useEffect, useState } from "react";

import { Navbar, Hero, Gallery, Footer } from "./components";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [y, setY] = useState(window.scrollY);

	const handleScroll = (e) => {
		const window = e.currentTarget;
		if (y > window.innerHeight) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
		setY(window.scrollY);
	};

	// Scroll state
	useEffect(() => {
		window.addEventListener("scroll", (e) => handleScroll(e));

		return () => {
			// return a cleanup function to unregister our function since its gonna run multiple times
			window.removeEventListener("scroll", (e) => handleScroll(e));
		};
	}, [y]);

	// On load
	useEffect(() => {
		AOS.init();
		AOS.refresh();

		// Loaded class to body
		document.getElementsByTagName("BODY")[0].classList.add("is-loaded");
	}, []);

	return (
		<div className={`bg-black w-full overflow-hidden ${isScrolled ? "is-scrolled" : ""}`}>
			{/* Nav */}
			<Navbar isScrolled={isScrolled} />

			{/* Hero */}
			<Hero />

			{/* Content */}
			<Gallery />
			<Footer />
		</div>
	);
};

export default App;
