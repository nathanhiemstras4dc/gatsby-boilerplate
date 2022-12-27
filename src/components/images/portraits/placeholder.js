import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitPlaceholder(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/placeholder.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
