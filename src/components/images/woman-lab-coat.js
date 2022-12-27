import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgWomanLabCoat(props) {
    return (
        <StaticImage
            src="../../../static/images/general/woman-lab-coat.jpg"
            alt={props.alt}
            className="img-fluid"
        />
    );
}
