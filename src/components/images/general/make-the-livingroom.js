import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgMakeTheLivingroom(props) {
    return (
        <StaticImage
            src="../../../../static/images/general/make-the-livingroom.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
