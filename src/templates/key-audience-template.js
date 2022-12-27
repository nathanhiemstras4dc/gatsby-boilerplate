import React from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";

const KeyAudienceTemplate = ({ data: { wpPage } }) => {
    const { title, content } = wpPage;
    return (
        <>
            <Header />
            <main className="container">
                <h3>{title}</h3>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </main>
            <Footer />
        </>
    );
};

export const query = graphql`
    query ($id: String!) {
        wpPage(id: { eq: $id }) {
            title
            content
        }
    }
`;

export default KeyAudienceTemplate;
