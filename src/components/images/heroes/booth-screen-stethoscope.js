import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHeroBoothScreenStethoscope(props) {
    return (
        <StaticImage
            src="../../../../static/images/heroes/booth-screen-stethoscope.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
            transformOptions="cover"
            objectPosition={props.position}
        />
    );
}
