import { Link } from "gatsby"
import React from "react"
import SiteLogoLight from "./site-logo-light"
import MenuFooter from "./menu-footer"
import MenuUtility from "./menu-utility"

const Footer = ({ data }) => {
  return (
    <footer className="bg-primary text-white links-white footer py-6">
      <div className="container my-3">
        <div className="footer-groups">
          <div
            className="footer--group-info"
            style={{ fontSize: "15px", lineHeight: "20px" }}
          >
            <Link to="/" className="d-flex">
              <SiteLogoLight />
            </Link>

            <p className="mt-5">
              <Link to="mailto:" className="link-no-underline">
                info@website.com
              </Link>
              <br /> (000) 000-000
            </p>

            <p>Copyright ©2023. All Rights Reserved.</p>
          </div>
          <div
            className="footer--group-menus mt-5 mt-md-n3"
            style={{ fontSize: "20px", lineHeight: "32px" }}
          >
            <MenuFooter className="menu-footer" />
            <MenuUtility className="menu-footer mt-md-n5" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
