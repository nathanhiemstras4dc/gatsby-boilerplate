import * as React from "react";
import Layout from "../components/layout";
import MetaTags from "../components/meta-tags";
import Hero from "../components/hero";
import { ImgHeroExample } from "../components/images/heroes/example";

const AboutPage = ({ data }) => {
    const sectionHero = (
        <Hero
            img={<ImgHeroExample alt="Contact us" position="90% 50%" />}
        >
            Contact
        </Hero>
    );

    const sectionContact = (
        <section className="container my-5">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </section>
    );

    return (
        <Layout>
            {sectionHero}
            {sectionContact}
        </Layout>
    );
};

export default AboutPage;

export const Head = () => (
    <>
        <title>Contact - OnMed</title>
        <MetaTags></MetaTags>
    </>
);
