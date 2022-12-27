import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgInnovationForReal(props) {
    return (
        <StaticImage
            src="../../../../static/images/general/innovation-for-real.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
