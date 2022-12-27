import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgManBoothPills(props) {
    return (
        <StaticImage
            src="../../../static/images/general/man-booth-pills.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
