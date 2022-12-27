import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitRyanBrock(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/ryan-brock.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
