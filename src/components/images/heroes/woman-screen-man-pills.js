import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHeroWomanScreenManPills(props) {
    return (
        <StaticImage
            src="../../../../static/images/heroes/woman-screen-man-pills.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
            transformOptions="cover"
            objectPosition={props.position}
        />
    );
}
