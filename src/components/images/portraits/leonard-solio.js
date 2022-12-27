import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitLeonardSolio(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/leonard-solio.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
