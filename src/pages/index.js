import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MetaTags from "../components/meta-tags"

const IndexPage = ({ data }) => {
    const {
        wpPage: { title, content, featuredImage, pageHome },
    } = data


    const sectionIntro = (
        <section>
            <div className="container">
                <h1>{title}</h1>
                <h2>{pageHome.introheadline}</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: pageHome.introbody,
                    }}
                ></div>
            </div>
        </section>
    )

    return <Layout pageTitle="home">{sectionIntro}</Layout>
}

export default IndexPage

export const pageQuery = graphql`
    query {
        wpPage(isFrontPage: { eq: true }) {
            slug
            title
            pageHome {
                introheadline
                introbody
            }
        }
    }
`


export const Head = ({ data }) => {
    const {
        wpPage: { title },
    } = data
    return (
        <>
            <title>{title}</title>
            <MetaTags></MetaTags>
        </>)
}
