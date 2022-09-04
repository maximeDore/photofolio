import { logo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (
	<footer className="wrap padd-top bg-white text-black">
		<div className="wrapper flex">
			<div className={` md:flex-row flex-col mb-8 w-full`}>
				<div className="flex-1 flex flex-col justify-start mr-10">
					<img src={logo} alt="Maxime Doré" className="w-[120px] h-[90px] object-contain" />
				</div>
			</div>
		</div>
		<div className="w-full wrapper flex justify-between items-center md:flex-row flex-col pt-6 pb-6">
			<p>© Maxime Doré, Tous droits réservés {new Date().getFullYear()} </p>

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
	</footer>
);

export default Footer;
