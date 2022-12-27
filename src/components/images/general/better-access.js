import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgBetterAccess(props) {
    return (
        <StaticImage
            src="../../../../static/images/general/better-access.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
