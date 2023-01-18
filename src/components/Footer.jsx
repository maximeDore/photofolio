import { footerSeparator } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (
	<footer className="bg-white text-black relative">
		<img src={footerSeparator} width="1920" height="433" className="w-full" alt="" />
		<div className="wrap">
			<div className="w-full wrapper flex justify-between items-center md:flex-row md:text-left text-center flex-col pb-6">
				<p>© Maxime Doré, Tous droits réservés {new Date().getFullYear()} </p>
				{/* TODO: Ajouter un disclaimer */}
				<div className="flex flex-row md:mt-0 mt-6">
					{socialMedia.map((social, index) => (
						<a key={social.id} href={social.link} title={social.name} target="_blank">
							<img
								src={social.icon}
								alt={social.id}
								className={`social w-[21px] h-[21px] object-contain cursor-pointer ${
									index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
								}`}
							/>
						</a>
					))}
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
