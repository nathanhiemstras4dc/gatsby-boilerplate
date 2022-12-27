import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPillBottlesInBooth(props) {
    return (
        <StaticImage
            src="../../../static/images/general/pill-bottles-in-booth.jpg"
            alt={props.alt}
            className={`img-fluid ${props.className}`}
        />
    );
}
