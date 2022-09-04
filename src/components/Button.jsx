import React from "react";

const Button = ({ text, line, icon, className, href, onClick }) => {
	if (href) {
		return (
			<a href={href} className={className}>
				{line == "left" && <span className="button__line"></span>}
				<span className="button__text">{text}</span>
				{line == "right" && <span className="button__line"></span>}
			</a>
		);
	} else {
		return (
			<button type="button" className={`button ${className}`} onClick={onClick}>
				{line == "left" && <span className="button__line"></span>}
				<span className="button__text">{text}</span>
				{icon && <img src={icon} className="max-w-[24px]" alt="icon" />}
				{line == "right" && <span className="button__line"></span>}
			</button>
		);
	}
};

export default Button;
