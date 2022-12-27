import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHeroWomanBloodPressure(props) {
    return (
        <StaticImage
            src="../../../../static/images/heroes/woman-blood-pressure.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
            transformOptions="cover"
            objectPosition={props.position}
        />
    );
}
