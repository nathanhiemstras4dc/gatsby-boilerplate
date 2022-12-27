import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgGeneralExample(props) {
    return (
        <StaticImage
            src="../../../../static/images/general/example.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
