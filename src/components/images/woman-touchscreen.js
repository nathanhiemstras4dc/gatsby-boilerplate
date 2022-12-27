import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgWomanThouchscreen(props) {
    return (
        <StaticImage
            src="../../../static/images/general/woman-lab-coat-touchscreen.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
