import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitChrisKent(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/chris-kent.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
