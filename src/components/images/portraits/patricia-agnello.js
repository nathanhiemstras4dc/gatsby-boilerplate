import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitPatriciaAgnello(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/patricia-agnello.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
