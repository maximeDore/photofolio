import { logo } from "../assets";
// import { navLinks } from "../constants";

const Navbar = () => {
	return (
		<nav id="nav" className="w-full fixed top-0 left-0 wrap z-[999]">
			<div className="wrapper w-full flex justify-between items-center">
				<a href="/" className="logo" title="Retour en haut">
					<img src={logo} alt="Maxime Doré" className="w-[120px] h-[90px]" />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
