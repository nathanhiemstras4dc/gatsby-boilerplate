import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgCareForAnyone(props) {
    return (
        <StaticImage
            src="../../../../static/images/general/care-for-anyone.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
