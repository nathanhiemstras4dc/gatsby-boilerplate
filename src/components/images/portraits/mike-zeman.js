import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitMikeZeman(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/mike-zeman.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
