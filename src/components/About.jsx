import React from "react";

import { times } from "../assets";
import { about } from "../assets";
import Button from "./Button";

const About = ({ active, onClosePopup }) => {
	return (
		<div
			className={`popup popup--about fixed top-0 left-0 sm:w-4/5 w-[90%] h-full pointer-events-auto z-50 ${
				active ? "is-active" : ""
			}`}
		>
			<button
				type="button"
				className="transition-shadow absolute top-0 right-0 p-10 cursor-pointer z-[2] rounded-bl-[60px] shadow-md hover:shadow-xl bg-white"
				onClick={onClosePopup}
				title="Fermer"
			>
				<img src={times} width="24" height="24" alt="fermer" />
			</button>
			<div className="w-full h-full bg-black text-white relative z-[1] overflow-auto">
				<div className="flex md:flex-nowrap flex-wrap items-center content-center h-full gap-4">
					{/* Left */}
					<div className="padd md:w-1/2 w-full relative z-[1]">
						<div className="wrap">
							<h2 className="h2 mb-8">À propos</h2>
							<p>
								Bien que confortable sur une chaise derrière mon bureau à taper du code à longueur de journée, 
								rien n'égale sortir dans les rues et y capturer des moments humains et impossible à reproduire. 
								Ou goûter à la nature et découvrir/redécouvrir des paysages épatants.
							</p>
							<p>
								Photographe depuis 2020 je m'adonne à toutes sortes de disciplines à défaut d'être en mesure de 
								m'arrêter sur une seule. Que ce soit de la photographie de portraits, paysages, architecture, 
								agriculture, événements sportifs, voyage, j'ai toujours une caméra avec moi (même pour faire 
								l'épicerie).
							</p>
							<p>
								Sur une note plus personnelle je suis adepte d'escalade, skateboard, course, gaming, airsoft, 
								backpacking ainsi que musicien de longue date.
							</p>
							<div className="mt-10"><Button text="Me contacter" line="right" className="button--white" href="mailto:maximedore43@gmail.com" /></div>
						</div>
					</div>
					{/* Right */}
					<div className="md:w-1/2 w-full h-full md:static absolute top-0 left-0 md:opacity-100 opacity-25">
						<img src={about} className="h-full w-full object-cover" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
