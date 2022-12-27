import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgWalkinsWelcome(props) {
    return (
        <StaticImage
            src="../../../static/images/general/walkins-welcome.jpg"
            alt={props.alt}
            className={`img-fluid ${props.className}`}
        />
    );
}
