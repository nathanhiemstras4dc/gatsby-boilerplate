import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHeroExample(props) {
    return (
        <StaticImage
            src="../../../../static/images/heroes/example.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
            transformOptions="cover"
            objectPosition={props.position || "50% 50%"}
        />
    );
}

export function ImgGeneralExample(props) {
    return (
        <StaticImage
            src="../../../../static/images/general/example.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
