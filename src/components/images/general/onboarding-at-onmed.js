import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgOboardingAtOnmed(props) {
    return (
        <StaticImage
            src="../../../../static/images/general/onboarding-at-onmed.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
        />
    );
}
