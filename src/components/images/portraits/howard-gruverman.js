import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgPortraitHowardGruverman(props) {
    return (
        <StaticImage
            src="../../../../static/images/portraits/howard-gruverman.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
