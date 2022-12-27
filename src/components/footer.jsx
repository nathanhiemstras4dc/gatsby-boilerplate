import { Link } from "gatsby"
import React from "react"
import SiteLogoLight from "./site-logo-light"
import MenuFooter from "./menu-footer"
import MenuUtility from "./menu-utility"
import imgSocialFacebook from "../../static/icons/social-media/facebook.svg"
import imgSocialYouTube from "../../static/icons/social-media/youtube.svg"
import imgSocialInstagram from "../../static/icons/social-media/instagram.svg"
import imgSocialLinkedIn from "../../static/icons/social-media/linked-in.svg"
import imgSocialTwitter from "../../static/icons/social-media/twitter.svg"

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
            <p>Terms of Use | Privacy Policy</p>
          </div>
          <div
            className="footer--group-menus d-flex align-items-start mt-5 mt-md-n3"
            style={{ fontSize: "20px", lineHeight: "32px" }}
          >
            <MenuFooter className="footer--menu" />
            {/* <MenuUtility className="footer--menu" /> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
