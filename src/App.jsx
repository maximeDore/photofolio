import { useEffect, useState } from "react";

import { Navbar, Hero, Gallery, Footer, Spinner } from "./components";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [y, setY] = useState(window.scrollY);

	const handleScroll = (e) => {
		const window = e.currentTarget;
		if (y > window.innerHeight * 0.9) {
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
		AOS.init({ duration: 1000 });
		AOS.refresh();

		setIsLoaded(true);
	}, []);

	return (
		<>
			<Spinner className={`${isScrolled ? "is-scrolled" : ""}  ${isLoaded ? "is-loaded" : ""}`} />
			<div className={`bg-black w-full ${isScrolled ? "is-scrolled" : ""}  ${isLoaded ? "is-loaded" : ""}`}>
				{/* Nav */}
				<Navbar isScrolled={isScrolled} />

				{/* Hero */}
				<Hero />

				{/* Content */}
				<Gallery />
				<Footer />
			</div>
		</>
	);
};

export default App;
