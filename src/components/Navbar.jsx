import { logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({ isScrolled }) => {
	console.log(isScrolled);
	return (
		<nav id="nav" className="w-full fixed top-0 left-0 wrap z-[999]">
			<div className="wrapper w-full flex justify-between items-center">
				<a href="/" className="logo" title="Retour en haut">
					<img src={logo} alt="Maxime Doré" className="w-[120px] h-[90px]" />
				</a>
				<ul className={`flex items-center justify-end ${isScrolled ? "text-white" : "text-dark"}`}>
					{navLinks.map((link, index) => (
						<li key={link.id}>
							<a
								className={`nav__link transition-colors hover:text-white ${
									index !== navLinks.length - 1 ? "mr-10" : ""
								} drop-shadow-md shadow-black`}
								href={`#${link.id}`}
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
