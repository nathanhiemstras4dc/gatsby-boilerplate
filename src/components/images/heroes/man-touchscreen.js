import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHeroManTouchscreen(props) {
    return (
        <StaticImage
            src="../../../../static/images/heroes/man-touchscreen.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
            transformOptions="cover"
            objectPosition={props.position}
        />
    );
}
