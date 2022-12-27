import * as React from "react";
import Layout from "../components/layout";
import CardColsSecondary from "../components/card-cols-secondary";
import KeyAudienceSellingPoints from "../modules/key-audience-selling-points";
import ContactForm from "../components/contact-form";
import SvgNewWindow from "../components/svgs/new-window";
import { ImgCareForAnyone } from "../components/images/general/care-for-anyone";
import { ImgBooth } from "../components/images/general/booth";
import { Link } from "gatsby";
import MetaTags from "../components/meta-tags";
import { ImgHeroManOfficeChair } from "../components/images/heroes/man-office-chair";
import Hero from "../components/hero";

const PartnersPage = ({ data }) => {
    const sectionHero = (
        <Hero
            img={
                <ImgHeroManOfficeChair
                    alt="Become an OnMed partner"
                    positions="70% 50%"
                    classNames="mb-5 mb-md-6"
                />
            }
        >
            Step into the future of healthcare
        </Hero>
    );

    const sectionWalkIn = (
        <CardColsSecondary
            headline="Care for anyone. Anywhere."
            body={
                <p>
                    OnMed is a convenient virtual healthcare solution for
                    sponsor partners including Government Agencies, Payers,
                    Providers, Large Employers, Colleges and Universities and
                    high-traffic venues. We deliver sponsors and patients with a
                    meaningful cost-saving solution for the challenges of the
                    current brick-and-mortar Primary Care delivery model. OnMed
                    can deliver care to communities and patients where access
                    and availability are difficult, even in rural and remote
                    areas.
                </p>
            }
            img={<ImgCareForAnyone />}
            imgAlignRight={false}
        />
    );

    const sectionCareAnywhere = (
        <CardColsSecondary
            headline="Easy to set up"
            body={
                <p>
                    OnMed Care Stations are easy to install and provide
                    comprehensive virtual care services 7 days a week with
                    extended hours, when and where patients need it most. Simple
                    and modern design, with almost no physical requirements -
                    just an outlet and an internet connection.
                </p>
            }
            img={<ImgBooth />}
            imgAlignRight={true}
        />
    );

    const sectionKeyAudienceSellingPoints = (
        <section className="bg-cloud py-5">
            <div className="container py-4 py-md-6">
                <KeyAudienceSellingPoints />
            </div>
        </section>
    );

    const sectionPartnerRequirements = (
        <section className="container py-6 my-4">
            <div className="text-center">
                <h2>Becoming an OnMed Partner</h2>
                <p className="lead">An overview of key partner requirements</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <dl className="dl-primary lead row">
                        <dt>3 Year Licensing Agreement</dt>
                        <dd>
                            OnMed Care Stations are available through a 3-year
                            Licensing Agreement with all terms and conditions
                            spelled out in the Agreement.
                        </dd>
                        <div className="100%"></div>

                        <dt>OnMed Fees</dt>
                        <dd>
                            The OnMed Virtual Care Platform, including the Care
                            Station, OnMed Clinical Staff and necessary service
                            and maintenance are accessed through monthly
                            licensing fees, patient utilization fees and
                            maintenance fees. Additional Marketing and
                            Advertising support and programs are available
                            through separate fee arrangements.
                        </dd>
                        <div className="100%"></div>
                        <dt>Lead Times and Implementation</dt>
                        <dd>
                            OnMed Care Stations can be deployed and operational
                            at the Sponsor location within 4 months from the
                            signing of a Letter of Intent.
                        </dd>
                        <div className="100%"></div>
                        <dt>Single or Double OnMed Care Stations</dt>
                        <dd>
                            The OnMed Care Station is available in two
                            configurations; a Single Room, featuring one patient
                            consult room with attached Robotic Dispensing System
                            and embedded software and servers or a Double Room,
                            featuring two patient consult rooms with the Robotic
                            Dispensing System and embedded software and servers
                            configured between the patient rooms.
                        </dd>
                        <div className="100%"></div>
                        <dt>Location &amp; Installation Requirements</dt>
                        <dd>
                            The free-standing OnMed Care Station requires
                            sufficient available square footage and ceiling
                            height to accommodate the Single or Double Care
                            Station. Additionally, the Care Station requires a
                            dedicated high-speed internet connection and power
                            outlet. The Care Station operates in common indoor
                            HVAC controlled conditions which is secure and
                            monitored. For custom-installed locations, other
                            than a free-standing location, OnMed requires
                            additional implementation time and potential fees.
                        </dd>
                        <div className="100%"></div>
                        <dt>Maintenance and Cleaning</dt>
                        <dd>
                            Daily cleaning and maintenance due to normal patient
                            traffic is the responsibility of the Sponsor.
                        </dd>
                        <div className="100%"></div>
                        <dt>Publicity and Marketing</dt>
                        <dd>
                            All Sponsor driven publicity and marketing that
                            utilizes the trademarks, images, technical
                            information or general OnMed marketing information
                            or content requires the approval of OnMed before
                            distribution or release.
                        </dd>
                    </dl>
                </div>
            </div>
        </section>
    );

    const sectionPsaPurchase = (
        <section className="bg-cloud py-4 py-6">
            <div className="container text-center py-6">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h2 className="text-primary mb-6">
                            PSA Purchasing Solutions Alliance
                        </h2>
                        <div className="lead">
                            <p className="mt-4">
                                For Current PSA Members and Interested Parties.
                            </p>
                            <div className="text-dark">
                                <p className="mt-4">
                                    PSA is a nationwide purchasing cooperative
                                    for public agencies. As a PSA member you
                                    have access to all of PSA's competitive
                                    contracts.
                                </p>
                                <p className="mt-4">
                                    Reference OnMed Contract No. 22-205
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            {/* <Link
                        to="/"
                        className="btn btn-primary text-uppercase  mb-3 me-2 mx-3"
                    >
                        View PSA Contract
                    </Link>{" "} */}
                            <Link
                                to="https://psabuy.org/"
                                className="btn btn-primary text-uppercase mb-3  mx-3 d-inline-flex align-items-center"
                                target="_blank"
                            >
                                Visit PSABUY.org
                                <SvgNewWindow
                                    className="ms-2"
                                    style={{
                                        height: "14px",
                                        width: "auto",
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const sectionContact = (
        <ContactForm
            headline="Request more information and set up a meeting"
            body="Please complete this form, and a member of our team will be in touch shortly. "
        />
    );

    return (
        <Layout>
            {sectionHero}
            {sectionWalkIn}
            {sectionCareAnywhere}
            {sectionKeyAudienceSellingPoints}
            {sectionPartnerRequirements}
            {sectionPsaPurchase}
            {sectionContact}
        </Layout>
    );
};

export default PartnersPage;

export const Head = () => (
    <>
        <title>Partners - OnMed</title>
        <MetaTags></MetaTags>
    </>
);
