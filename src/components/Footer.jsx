import { footerSeparator } from "../assets";
import { socialMedia } from "../constants";

// Components
import Social from "./Social";

const Footer = () => (
	<footer className="sticky bottom-0 bg-white text-black">
		<img src={footerSeparator} width="1920" height="433" className="w-full" alt="" />
		<div className="wrap pb-16">
			<div className="w-full wrapper flex justify-between items-center md:flex-row md:text-left text-center flex-col pb-6">
				<p>© Maxime Doré, Tous droits réservés {new Date().getFullYear()} </p>
				{/* TODO: Ajouter un disclaimer */}
				<div className="flex flex-row  md:mt-0 mt-6">
					{socialMedia.map((social, index) => (
						<Social
							name={social.name}
							id={social.id}
							icon={social.icon}
							link={social.link}
						/>
					))}
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
