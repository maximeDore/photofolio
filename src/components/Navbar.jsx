import { useState } from "react";

import { logo } from "../assets";
import { navLinks } from "../constants";
import About from "./About";
import Contact from "./Contact";

import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar = ({ isScrolled }) => {
	const [popup, setPopup] = useState("");

	const togglePopup = (e, popupRef) => {
		if (popupRef) e.preventDefault();
		if (popupRef === popup) {
			setPopup("");
		} else {
			setPopup(popupRef);
		}
	};

	return (
		<nav id="nav" className="w-full fixed top-0 left-0 wrap z-40 pointer-events-none">
			<About active={popup === "about" ? true : false} onClosePopup={() => togglePopup()} />

			<Contact active={popup === "contact" ? true : false} onClosePopup={() => togglePopup()} />

			<div className="w-full flex justify-between items-center" data-aos="fade-down">
				<a href={window.location.origin} className={`logo pointer-events-auto pt-2 pb-2 transition-transform ${isScrolled ? "transform-none" : "-translate-y-[120%]"}`} title="Retour en haut">
					<Logo alt="Maxime Doré" className="xs:w-[120px] w-[60px] xs:h-[80px] h-[45px]" />
					<img src={logo} alt="Maxime Doré" className="xs:w-[120px] w-[60px] xs:h-[80px] h-[45px] hidden" />
				</a>
				<ul className={`flex items-center justify-end gap-2 transition-[padding]  ${isScrolled ? "text-white" : "text-black pr-16 sm:pr-sidebar"}`}>
					{/* Nav links */}
					{navLinks.map((link, index) => (
						<li key={link.id}>
							<a
								className={`nav__link transition-colors ${isScrolled ? " hover:text-primary" : " hover:text-white"} pointer-events-auto p-4`}
								href={`#${link.htmlID}`}
								onClick={(e) => togglePopup(e, link.popup)}
								data-popup={link.popup}
								title={link.title}
							>
								{link.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
