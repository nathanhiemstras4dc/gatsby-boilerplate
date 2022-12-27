import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgBoothWomanVitals(props) {
    return (
        <StaticImage
            src="../../../static/images/general/booth-woman-vitals.jpg"
            alt={props.alt}
            className={`img-fluid ${props.className}`}
        />
    );
}
