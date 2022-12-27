import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { flatListToHierarchical } from "../utilities/menus";

const MenuUtility = (props) => {
    const { wpMenu } = useStaticQuery(graphql`
        {
            wpMenu(slug: { eq: "utility-menu" }) {
                name
                menuItems {
                    nodes {
                        id
                        label
                        path
                    }
                }
            }
        }
    `);

    const menuHierarchical = flatListToHierarchical(wpMenu.menuItems.nodes);

    return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
        <Navbar expand="md" className={props.className}>
            <Nav className="me-auto" defaultActiveKey="/">
                {menuHierarchical.map((menuItem, i) => (
                    <Nav.Link key={`menu-${i}`} href={menuItem.url}>
                        {menuItem.label}
                    </Nav.Link>
                ))}
            </Nav>
        </Navbar>
    ) : null;
};

export default MenuUtility;
