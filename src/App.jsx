import { useEffect, useState } from "react";

import { Navbar, Hero, Gallery, Footer, Spinner, BackToTop, Konami } from "./components";

import AOS from "aos";
import "aos/dist/aos.css";

// TODO: Version bilingue?

const App = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isKonami, setIsKonami] = useState(false);
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

	// KONAMI CODE
	const konamicode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
	let kc = 0;

	// KONAMI CODE
	const checker = () => {
		if (kc == 10) {
			kc = 0;

			document.getElementsByTagName("BODY")[0].classList.add("konami");
			setIsKonami(true);
		}
	}
	const keyUp = (e) => {
		var keynum;
		if (window.event) {
			keynum = event.keyCode;
		} else if (e.which) {
			keynum = e.which;
		}
		for (let i = 0; i < 222; i++) {
			var kx = konamicode[kc];
			if (keynum == i) {
				if (i != kx) {
					kc = 0;
				} else {
					kc++;
				}
			}
		}
		checker();
	}

	// On load
	useEffect(() => {
		AOS.init({ duration: 1000 });
		AOS.refresh();

		document.onkeyup = keyUp;

		setIsLoaded(true);
	}, []);

	// Scroll state
	useEffect(() => {
		window.addEventListener("scroll", (e) => handleScroll(e));

		return () => {
			// return a cleanup function to unregister our function since its gonna run multiple times
			window.removeEventListener("scroll", (e) => handleScroll(e));
		};
	}, [y]);

	if (isKonami) {
		return <Konami />
	}

	return (
		<>
			<Spinner className={`${isScrolled ? "is-scrolled" : ""}  ${isLoaded ? "is-loaded" : ""}`} />
			<div className={`bg-black w-full ${isScrolled ? "is-scrolled" : ""}  ${isLoaded ? "is-loaded" : ""}`}>
				{/* Nav */}
				<Navbar isScrolled={isScrolled} />

				{/* Hero */}
				<Hero />

				{/* Content */}
				<main>
					<Gallery />
					<BackToTop isScrolled={isScrolled} />
					<Footer />
				</main>
			</div>
		</>
	);
};

export default App;
