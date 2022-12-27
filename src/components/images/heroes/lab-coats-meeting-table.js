import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ImgHeroLabCoatsMeetingTable(props) {
    return (
        <StaticImage
            src="../../../../static/images/heroes/lab-coats-meeting-table.jpg"
            alt={props.alt}
            className={props.className}
            layout="fullWidth"
            transformOptions="cover"
            objectPosition={props.position}
        />
    );
}
