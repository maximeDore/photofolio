import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from 'lenis/react'

import { Navbar, Hero, Gallery, Footer, Spinner, BackToTop, Konami } from "./components";

const App = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isKonami, setIsKonami] = useState(false);
	
	// Lenis scroll
	const lenis = useLenis((lenis) => {
		// called every scroll
		handleScroll(lenis.targetScroll);
	})

	const handleScroll = (y) => {
		setIsScrolled(y > window.innerHeight * 0.9);
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
		document.onkeyup = keyUp;

		setTimeout(() => { setIsLoaded(true) }, 500);
	}, []);

	if (isKonami) {
		return <Konami />
	}

	return (
		<>
			<Spinner className={`${isScrolled ? "is-scrolled" : ""}  ${isLoaded ? "is-loaded" : ""}`} />
			<ReactLenis root />
			<div className={`bg-black w-full ${isScrolled ? "is-scrolled" : ""}  ${isLoaded ? "is-loaded" : ""}`}>
				{/* Nav */}
				<Navbar isScrolled={isScrolled} />

				{/* Hero */}
				<Hero />

				{/* Content */}
				<main>
					<Gallery lenisInstance={lenis} />
					<BackToTop isScrolled={isScrolled} />
					<Footer />
				</main>
			</div>
		</>
	);
};

export default App;
