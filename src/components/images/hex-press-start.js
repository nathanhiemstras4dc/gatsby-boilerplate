import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHexPressStart(props) {
    return (
        <StaticImage
            src="../../../static/images/hex/press-start.png"
            alt={props.alt}
            className="img-fluid"
        />
    );
}
