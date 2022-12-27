import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import logo from "../../static/images/logos/onmed-logo.svg";

const SiteLogo = () => {
    return <img src={logo} height={47} alt="OnMed logo" layout="fixed" />;
};

export default SiteLogo;
