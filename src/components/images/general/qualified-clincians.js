import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgQualifiedClinicians(props) {
    return (
        <StaticImage
            src="../../../../static/images/general/qualified-clincians.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
