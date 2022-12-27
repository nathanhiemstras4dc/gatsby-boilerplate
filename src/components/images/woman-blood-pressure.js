import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgWomanBloodPressure(props) {
    return (
        <StaticImage
            src="../../../static/images/general/woman-blood-pressure.jpg"
            alt={props.alt}
            className="img-fluid"
        />
    );
}
