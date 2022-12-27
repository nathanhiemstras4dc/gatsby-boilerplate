import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitSteveJohnston(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/steve-johnston.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
