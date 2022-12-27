import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgNewsTuskegeeVideo(props) {
    return (
        <StaticImage
            src="../../../../static/images/news/tuskegee-video.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
