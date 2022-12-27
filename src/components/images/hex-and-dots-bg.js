import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { VideoLongForm } from "../video-long-form";

export function ImgHexAndDotsBg(props) {
    return (
        <div>
            <StaticImage
                src="../../../static/images/backgrounds/hex-and-dots.webp"
                alt={props.alt}
                className={`img-fluid ${props.className}`}
                backgroundColor="transparent"
            />
            <VideoLongForm className="video-desktop" />
        </div>
    );
}
