import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitJimSparks(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/jim-sparks.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
