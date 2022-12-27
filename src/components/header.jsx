import { Link } from "gatsby";

import React from "react";
import SiteLogo from "./site-logo";
import MenuHeader from "./menu-header";

const Header = ({ pageTitle }) => {
    const classes = pageTitle ? `page-${pageTitle.toLowerCase()}` : "";
    return (
        <header
            className={`py-2  menu-header-wrapper d-flex align-items-center ${classes}`}
        >
            <div className="container ">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/" className="text-light d-flex">
                        <SiteLogo />
                    </Link>
                    <MenuHeader />
                </div>
            </div>
        </header>
    );
};

export default Header;
