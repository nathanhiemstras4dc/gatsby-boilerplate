import React from "react";
import Header from "./header";
import Footer from "./footer";
import SiteScripts from "./site-scripts";

const Layout = ({ pageTitle, children }) => {
    return (
        <>
            <Header pageTitle={pageTitle} />
            <main>{children}</main>
            <Footer />
            <SiteScripts />
        </>
    );
};

export default Layout;
