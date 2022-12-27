import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitTomVanderheyden(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/tom-vanderheyden.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
