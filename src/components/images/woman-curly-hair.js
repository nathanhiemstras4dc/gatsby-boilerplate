import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgWomanCurlyHair(props) {
    return (
        <StaticImage
            src="../../../static/images/general/woman-curly-hair.jpg"
            alt={props.alt}
            className="img-fluid"
        />
    );
}
