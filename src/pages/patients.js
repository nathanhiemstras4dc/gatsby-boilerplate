import * as React from "react";
import Layout from "../components/layout";
import CardColsSecondary from "../components/card-cols-secondary";

import { ImgHeroBoothScreenStethoscope } from "../components/images/heroes/booth-screen-stethoscope";
import { ImgWalkinsWelcome } from "../components/images/walkins-welcome";
import { ImgBoothWomanVitals } from "../components/images/booth-woman-vitals";
import { ImgPillBottlesInBooth } from "../components/images/pill-bottles-in-booth";

import KeyAudienceSellingPoints from "../modules/key-audience-selling-points";
import MetaTags from "../components/meta-tags";
import Hero from "../components/hero";

const PatientsPage = ({ data }) => {
    const sectionHero = (
        <Hero
            img={
                <ImgHeroBoothScreenStethoscope
                    alt="Step into the future of healthcare"
                    positions="60% 50%"
                />
            }
        >
            Step into the future of healthcare
        </Hero>
    );

    const sectionWalkIn = (
        <CardColsSecondary
            headline="Walk-ins always welcome. Walk out with what you need."
            body={
                <p>
                    No appointment needed, just enter and press START. Our OnMed
                    clinicians will join you immediately via our interactive
                    screen to introduce themselves and walk you through your
                    entire appointment. Your visit will be private, safe and
                    secure and the Care Station room will automatically clean
                    and sanitize itself after you leave for the next patient.
                </p>
            }
            img={<ImgWalkinsWelcome alt="" />}
            imgAlignRight={false}
        />
    );

    const sectionCareAnywhere = (
        <CardColsSecondary
            headline="Meds in minutes"
            body={
                <p>
                    OnMed’s proprietary robotic dispensary system allows our
                    clinicians to provide you with the necessary OTC or
                    prescription medications at the time of your visit.
                </p>
            }
            img={<ImgPillBottlesInBooth alt="" />}
            imgAlignRight={true}
        />
    );

    const sectionVitals = (
        <CardColsSecondary
            headline="Your vitals matter"
            body={
                <p>
                    OnMed’s care visit includes real-time measurements of your
                    key vitals for an accurate diagnosis and treatment
                    experience. Your key health metrics are displayed instantly
                    on the screen.
                </p>
            }
            img={<ImgBoothWomanVitals alt="" />}
            imgAlignRight={false}
        />
    );

    const sectionKeyAudienceSellingPoints = (
        <section className="bg-cloud py-5">
            <div className="container py-4 py-md-6">
                <KeyAudienceSellingPoints />
            </div>
        </section>
    );

    return (
        <Layout>
            {sectionHero}
            {sectionWalkIn}
            {sectionCareAnywhere}
            {sectionVitals}
            {sectionKeyAudienceSellingPoints}
        </Layout>
    );
};

export default PatientsPage;

export const Head = () => (
    <>
        <title>Patients - OnMed</title>
        <MetaTags></MetaTags>
    </>
);
