import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgNewsPurchasingSolutionsAlliance(props) {
    return (
        <StaticImage
            src="../../../../static/images/news/purchasing-solutions-alliance.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
