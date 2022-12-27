import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHexWalkOut(props) {
    return (
        <StaticImage
            src="../../../static/images/hex/walk-out.png"
            alt={props.alt}
            className="img-fluid"
        />
    );
}
