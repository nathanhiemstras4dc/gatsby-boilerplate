import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitMarkRoyals(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/mark-royals.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
