import React from "react";
import { InstagramIcon, LinkedInIcon, UnsplashIcon, TroisiemeIcon } from "./icons";

const iconComponents = {
   instagram: InstagramIcon,
   linkedin: LinkedInIcon,
   unsplash: UnsplashIcon,
   troisieme: TroisiemeIcon
}

const Button = ({ name, id, icon, link }) => {
   const IconComponent = iconComponents[icon]

   return (
      <a className="inline-block p-3" key={id} href={link} title={name} target="_blank">
         <IconComponent 
            className="w-6 h-6 transition-colors duration-[300ms] hover:text-primary"
         />
      </a>
   )
}

export default Button;
