import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHexWalkIn(props) {
    return (
        <StaticImage
            src="../../../static/images/hex/walk-in.png"
            alt={props.alt}
            className="img-fluid"
        />
    );
}
