import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHeroWomanScreenWomanTouchscreen(props) {
    return (
        <StaticImage
            src="../../../../static/images/heroes/woman-screen-woman-touchscreen.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
            transformOptions="cover"
            objectPosition={props.position || "50% 50%"}
        />
    );
}
