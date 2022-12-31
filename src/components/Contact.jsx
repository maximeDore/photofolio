import React from "react";

import { times } from "../assets";
import Button from "./Button";

const Contact = ({ active, onClosePopup }) => {
	return (
		<div
			className={`popup popup--contact fixed top-0 right-0 sm:w-4/5 w-[90%] h-full text-black pointer-events-auto z-50 ${
				active ? "is-active" : ""
			}`}
		>
			<button
				type="button"
				className="transition-shadow absolute top-0 right-0 p-10 cursor-pointer z-[2] rounded-bl-[60px] shadow-md hover:shadow-xl"
				onClick={onClosePopup}
				title="Fermer"
			>
				<img src={times} width="24" height="24" alt="fermer" />
			</button>
			<div className="w-full h-full wrap padd bg-white relative z-[1] overflow-auto">
				<div className="wrapper flex md:flex-nowrap flex-wrap items-center content-center h-full gap-4">
					{/* Left */}
					<div className="md:w-1/2 w-full">
						<h2 className="h2 mb-8">Comment me contacter</h2>
						<p>
							Pour une estimation ou une demande d'information vous pouvez m'envoyer un message direct sur
							Instagram ou un courriel en utilisant le bouton suivant.
						</p>
						<p>
							Merci de faire preuve d'indulgence. Être photographe n'est pas mon emploi à temps plein mais bien
							une passion à temps partiel. Je vous répondrai dès que possible.
						</p>
					</div>
					{/* Right */}
					<div className="md:w-1/2 w-full md:mt-0 mt-10 md:text-center">
						<Button text="Courriel" line="right" className="button--black" href="mailto:maximedore43@gmail.com" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
