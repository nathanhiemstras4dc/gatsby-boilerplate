import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHeroGrabbingPillBottles(props) {
    return (
        <StaticImage
            src="../../../../static/images/heroes/grabbing-pill-bottles.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
            transformOptions="cover"
            objectPosition={props.position}
        />
    );
}
