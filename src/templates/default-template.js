import React from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";

const DefaultTemplate = ({ data: { wpPage } }) => {
    const { title, content } = wpPage;
    return (
        <>
            <Header />
            <main className="container">
                <h1>{title}</h1>
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

export default DefaultTemplate;
