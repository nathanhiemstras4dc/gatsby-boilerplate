import * as React from "react";
import Layout from "../components/layout";
import HeroPrimary from "../components/hero-primary";
import ContactFormIFrame from "../components/contact-form-iframe";
import MetaTags from "../components/meta-tags";
import Hero from "../components/hero";
import { ImgHeroManTouchscreen } from "../components/images/heroes/man-touchscreen";

const AboutPage = ({ data }) => {
    const sectionHero = (
        <Hero
            img={<ImgHeroManTouchscreen alt="Contact us" position="90% 50%" />}
        >
            Contact
        </Hero>
    );

    const sectionContact = (
        <section className="container py-4 ">
            <p className="lead py-4 py-md-6 text-center">
                Please complete this form, and a member of our team will be in
                touch shortly.
            </p>
            <div className="row justify-content-center">
                <div className="col-md-9 col-md-6">
                    <ContactFormIFrame className="mb-md-6" />
                </div>
            </div>
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
