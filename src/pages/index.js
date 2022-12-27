import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MetaTags from "../components/meta-tags"
import { ImgHeroExample } from "../components/images/heroes/example";
import Hero from "../components/hero";


const IndexPage = ({ data }) => {
    const {
        wpPage: { title, content, featuredImage, pageHome },
    } = data

    const sectionHero = (
        <Hero
            img={<ImgHeroExample alt="Contact us" position="90% 50%" />}
        >
            {title}
        </Hero>
    );


    const sectionIntro = (
        <section>
            <div className="container my-6">
                <h2 class="h4">{pageHome.introheadline}</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: pageHome.introbody,
                    }}
                ></div>
            </div>
        </section>
    )

    return <Layout pageTitle="home">{sectionHero}{sectionIntro}</Layout>
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
