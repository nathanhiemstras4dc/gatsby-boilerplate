import * as React from "react";
import Layout from "../components/layout";
import MetaTags from "../components/meta-tags";
import CardColsSecondary from "../components/card-cols-secondary";
import { ImgInnovationForReal } from "../components/images/general/innovation-for-real";
import { ImgPortraitTomVanderheyden } from "../components/images/portraits/tom-vanderheyden";
import { ImgPortraitRyanBrock } from "../components/images/portraits/ryan-brock";
import { ImgPortraitSteveJohnston } from "../components/images/portraits/steve-johnston";
import { ImgPortraitPlaceholder } from "../components/images/portraits/placeholder";
import { ImgPortraitMikeZeman } from "../components/images/portraits/mike-zeman";
import { ImgPortraitPatriciaAgnello } from "../components/images/portraits/patricia-agnello";
import { ImgPortraitMarkRoyals } from "../components/images/portraits/mark-royals";
import { ImgPortraitLeonardSolio } from "../components/images/portraits/leonard-solio";
import { ImgPortraitMalienaLongley } from "../components/images/portraits/maliena-longley";
import { ImgPortraitJimSparks } from "../components/images/portraits/jim-sparks";
import { ImgPortraitHowardGruverman } from "../components/images/portraits/howard-gruverman";
import { ImgPortraitChrisKent } from "../components/images/portraits/chris-kent";
import { ImgHeroWomanScreenWomanTouchscreen } from "../components/images/heroes/woman-screen-woman-touchscreen";

import Hero from "../components/hero";

const LeadershipItem = (props) => {
    return (
        <div className="col-md-6 col-lg-4 mb-md-6">
            {props.img}
            <h5 className="mt-3 mb-0 text-primary">{props.name}</h5>
            <p
                className="lead text-uppercase"
                dangerouslySetInnerHTML={{
                    __html: props.title,
                }}
            ></p>
        </div>
    );
};

const AboutPage = ({ data }) => {
    const sectionHero = (
        <Hero
            img={
                <ImgHeroWomanScreenWomanTouchscreen
                    alt="Our story"
                    position="27% 50%"
                />
            }
        >
            Step into the future of healthcare
        </Hero>
    );

    const sectionIntro = (
        <section className="container py-4 py-md-6">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-xxl-6">
                    <p>
                        OnMed was founded on the commitment to make quality
                        affordable healthcare accessible to all. The company was
                        born out of an innovative spirit and belief that it
                        could create a more effective way for people to receive
                        care, including getting the medications they need
                        quickly. Our goal was to create a patient experience
                        that maintained clinical standards and protocols to
                        provide a highly personalized empathy-based
                        clinician-patient connection. The OnMed Virtual Care
                        Platform utilizes a broad range of diagnostic and
                        interactive technologies to ensure a highly efficient
                        and effective experience, but does not sacrifice the
                        real-life dynamics of a traditional brick and mortar
                        clinic setting.
                    </p>
                    <p>
                        Beyond designing a new Primary Care model and patient
                        experience with the OnMed platform, we also envisioned a
                        new professional opportunity for clinicians to practice
                        medicine and serve patients without the normal
                        constraints or requirements of working inside hospitals
                        or clinics. Going forward, OnMed will continue to expand
                        the breadth of care provided and clinical needs
                        addressed through new technologies and services, along
                        with our on going commitment to deliver the best patient
                        experience possible.
                    </p>
                </div>
            </div>
        </section>
    );

    const sectionInnovation = (
        <CardColsSecondary
            headline="Innovation for real"
            body={
                <p>
                    Over 31 Million people in the U.S. alone do not have access
                    to healthcare. At OnMed, we believe everyone has a right to
                    affordable convenient care. This real problem can only be
                    solved with real innovation. That’s why we combined the best
                    of interactive and diagnostic technology, with the medical
                    expertise and empathy of our dedicated clinicians. Together,
                    we’re opening the door to better health everywhere. That’s
                    innovation for real.
                </p>
            }
            img={<ImgInnovationForReal />}
            imgAlignRight={false}
        />
    );

    const sectionLeadershipTeam = (
        <section className="container pt-6 pb-6 pb-md-0">
            <h2 className="text-primary text-center my-6">Leadership Team</h2>
            <div className="row">
                <LeadershipItem
                    name="Tom Vanderheyden"
                    title="Chief executive officer"
                    img={<ImgPortraitTomVanderheyden />}
                />
                <LeadershipItem
                    name="Chris Kent"
                    title="Chief operating Officer"
                    img={<ImgPortraitChrisKent />}
                />
                <LeadershipItem
                    name="Howard Gruverman"
                    title="Chief Commercial Officer"
                    img={<ImgPortraitHowardGruverman />}
                />
                <LeadershipItem
                    name="Jim Sparks"
                    title="Chief Financial Officer"
                    img={<ImgPortraitJimSparks />}
                />
                <LeadershipItem
                    name="Maliena Longley"
                    title="Chief Medical officer"
                    img={<ImgPortraitMalienaLongley />}
                />
                <LeadershipItem
                    name="Mike Zeman"
                    title="Chief Marketing Officer"
                    img={<ImgPortraitMikeZeman />}
                />
                <LeadershipItem
                    name="Patricia Agnello"
                    title="Chief HR Officer &amp; Employment Counsel"
                    img={<ImgPortraitPatriciaAgnello />}
                />
                <LeadershipItem
                    name="Ryan Brock"
                    title="Chief Technology Officer"
                    img={<ImgPortraitRyanBrock />}
                />
                <LeadershipItem
                    name="Steve Johnston"
                    title="Chief legal officer"
                    img={<ImgPortraitSteveJohnston />}
                />
                <LeadershipItem
                    name="Leonard Solie"
                    title="Board Chair<br /> Founder"
                    img={<ImgPortraitLeonardSolio />}
                />
                <LeadershipItem
                    name="Mark Royals"
                    title="Board Member<br /> Founder"
                    img={<ImgPortraitMarkRoyals />}
                />
                <LeadershipItem
                    name="Robert Forsythe"
                    title="Board Member<br /> Third Lake Capital"
                    img={<ImgPortraitPlaceholder />}
                />
            </div>
        </section>
    );

    return (
        <Layout>
            {sectionHero}
            {sectionIntro}
            {sectionInnovation}
            {sectionLeadershipTeam}
        </Layout>
    );
};

export default AboutPage;

export const Head = () => (
    <>
        <title>About and Leadership Team - OnMed</title>
        <MetaTags></MetaTags>
    </>
);
