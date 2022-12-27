import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHexGetExam(props) {
    return (
        <StaticImage
            src="../../../static/images/hex/get-exam.png"
            alt={props.alt}
            className="img-fluid"
        />
    );
}
