import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgBooth(props) {
    return (
        <StaticImage
            src="../../../../static/images/general/booth.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
