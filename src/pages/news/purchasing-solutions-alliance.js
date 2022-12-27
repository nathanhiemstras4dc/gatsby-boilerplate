import * as React from "react";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import NewsStory from "../../components/news-story";
import MetaTags from "../../components/meta-tags";

const sectionHero = (
    <Hero heroSecondary={true}>
        Purchasing Solutions Alliance awards Virtual Health Clinics contract to
        OnMed
    </Hero>
);

const NewStoryPurchasingSolutionsAlliance = ({ data }) => {
    return (
        <Layout>
            {sectionHero}
            <NewsStory
                lead={
                    <p>
                        OnMed has been selected to provide Virtual Health
                        Clinics and Services to PSA Public Agency members.
                    </p>
                }
                img="/images/logos/purchasing-solutions-alliance.png"
                body={
                    <>
                        <p>
                            <b>About Purchasing Solutions Alliance </b>
                        </p>
                        <p>
                            Purchasing Solutions Alliance (PSA) is a cooperative
                            purchasing program of the Brazos Valley Council of
                            Governments (BVCOG). PSA was formed in 2008, when
                            the BVCOG Board of Directors unanimously approved a
                            resolution creating the cooperative purchasing
                            program. PSA currently has over 475 purchasing
                            members, including government agencies, schools,
                            higher education, and non-profit organizations.
                        </p>
                        <p>
                            PSA alleviates the burden of government purchasing
                            by competitively bidding contracts with quality
                            suppliers. All contracts are EDGAR compliant and are
                            competitively procured to 2CFR Part 200 standards.
                            PSA members realize greater discounts due to
                            economies of scale. PSA membership is free with no
                            minimum spend requirements. For more information,
                            visit www.psabuy.org or call 1-979-595-2800.
                        </p>

                        <p>
                            <b>About OnMed</b>
                        </p>

                        <p>
                            OnMed is an innovative leader in the Virtual Care
                            space offering primary care and urgent care through
                            their patented OnMed Care Station and Virtual
                            Medical Center. OnMed utilizes a proprietary system
                            of diagnostic and interactive technologies to
                            provide a highly personalized patient consultation
                            and treatment experience that is designed to
                            duplicate a traditional in-office clinic visit. The
                            Onmed Virtual Care Platform has the capability to
                            dispense OTC or Prescription medications at the time
                            of visit or e-prescribe medications to a preferred
                            pharmacy depending on local regulatory requirements.
                            OnMed partners with local Provider systems and
                            Payers to provide referrals and member
                            reimbursement. OnMed is actively working with
                            Government and Public Entities, Provider Systems,
                            Colleges and Universities, Large Employers, and High
                            Traffic Venues to offer a high-quality affordable
                            healthcare experience through its proprietary
                            Virtual Care Platform. The full-service OnMed
                            Virtual Care Platform offers a unique and
                            substantive alternative to the4 challenge of
                            building and deploying traditional brick and mortar
                            Primary Care clinics and the necessary operating and
                            staffing requirements.
                        </p>
                    </>
                }
            />
        </Layout>
    );
};

export default NewStoryPurchasingSolutionsAlliance;

export const Head = () => (
    <>
        <title>Purchasing Solutions Alliance News Story - OnMed</title>
        <MetaTags></MetaTags>
    </>
);
