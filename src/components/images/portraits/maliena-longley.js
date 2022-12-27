import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitMalienaLongley(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/maliena-longley.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
