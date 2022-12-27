import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgNewsAuburnTigers(props) {
    return (
        <StaticImage
            src="../../../../static/images/news/auburn-tigers.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
