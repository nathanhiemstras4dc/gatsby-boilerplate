import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgNewsTuskegee(props) {
    return (
        <StaticImage
            src="../../../../static/images/news/tuskegee.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
