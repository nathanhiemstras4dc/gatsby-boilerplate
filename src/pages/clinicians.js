import * as React from "react";
import Layout from "../components/layout";
import MetaTags from "../components/meta-tags";
import Hero from "../components/hero";
import CardColsSecondary from "../components/card-cols-secondary";
import { ImgQualifiedClinicians } from "../components/images/general/qualified-clincians";
import { ImgBetterAccess } from "../components/images/general/better-access";
import { ImgMakeTheLivingroom } from "../components/images/general/make-the-livingroom";
import { ImgOboardingAtOnmed } from "../components/images/general/onboarding-at-onmed";
import { ImgHeroWomanScreenManPills } from "../components/images/heroes/woman-screen-man-pills";

const CliniciansPage = ({ data }) => {
    const sectionHero = (
        <Hero
            img={
                <ImgHeroWomanScreenManPills
                    alt="A real connection"
                    position="50% 77%"
                />
            }
        >
            A real connection
        </Hero>
    );

    const sectionQualifiedClinicians = (
        <CardColsSecondary
            headline="Qualified clinicians. Quality care."
            body={
                <p>
                    As a part of OnMed, you can provide high-quality care for
                    patients through one-on-one virtual consultations, in
                    real-time. The clinician and patient connection is crucial
                    to our success and yours. Every interactive exam utilizes
                    medical-grade diagnostics specifically designed to take
                    vitals and key biometrics, allowing you to address patient
                    health concerns accurately and quickly. Our on-site
                    dispensary also lets you prescribe and deliver most
                    medications directly to patients in minutes.
                </p>
            }
            img={<ImgQualifiedClinicians />}
            imgAlignRight={false}
        />
    );

    const sectionBetterAccess = (
        <CardColsSecondary
            headline="Better access means better health  "
            body={
                <p>
                    Access to Primary Care can be difficult for many, not to
                    mention costly. In rural and remote communities it may not
                    even be within reach at all. That’s why we’re on a mission
                    to make quality care affordable and accessible for everyone.
                    Join us in our mission by applying now.
                </p>
            }
            img={<ImgBetterAccess />}
            imgAlignRight={true}
        />
    );

    const sectionMakeLiving = (
        <CardColsSecondary
            headline="Make the living room your waiting room"
            body={
                <p>
                    We value your expertise, and know that patients everywhere
                    need it. When you work at OnMed, you’ll have more
                    flexibility compared to traditional hospitals and
                    brick-and-mortar clinics, without sacrificing the core
                    principles of the clinician-patient relationship. Now you
                    can set your own schedule and even work from your home
                    office, utilizing our proprietary remote interactive
                    technology and tools.
                </p>
            }
            img={<ImgMakeTheLivingroom />}
            imgAlignRight={false}
        />
    );

    const sectionOnboarding = (
        <CardColsSecondary
            headline="Onboarding at OnMed"
            body={
                <p>
                    We use our technology as a means to best serve our patients.
                    But the OnMed experience is nothing without human compassion
                    and empathy. We will provide you with all the training you
                    need to use the diagnostics systems of our Care Stations to
                    examine, diagnose and offer the treatment that patients can
                    trust, just like a typical doctor’s visit.
                </p>
            }
            img={<ImgOboardingAtOnmed />}
            imgAlignRight={true}
        />
    );

    return (
        <Layout>
            {sectionHero}
            {sectionQualifiedClinicians}
            {sectionBetterAccess}
            {sectionMakeLiving}
            {sectionOnboarding}
        </Layout>
    );
};

export default CliniciansPage;

export const Head = () => (
    <>
        <title>Clinicians - OnMed</title>
        <MetaTags></MetaTags>
    </>
);
