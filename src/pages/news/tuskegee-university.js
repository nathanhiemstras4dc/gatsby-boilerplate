import * as React from "react";
import Layout from "../../components/layout";
import NewsStory from "../../components/news-story";
import MetaTags from "../../components/meta-tags";
import Hero from "../../components/hero";
import { ImgHeroTuskegeeUniversity } from "../../components/images/heroes/news/tuskegee-university";

const sectionHero = (
    <Hero
        img={<ImgHeroTuskegeeUniversity alt="Tuskegee" position="60% 50%" />}
    ></Hero>
);

const NewStoryTuskegee = ({ data }) => {
    return (
        <Layout>
            {sectionHero}
            <NewsStory
                headline="Tuskegee University and OnMed Announce Partnership to Deliver Innovative Virtual Care Clinic and Services."
                date="September 09, 2022"
                lead={
                    <p>
                        Tuskegee University, a preeminent Historical Black
                        College and University (HBCU), has partnered with
                        Virtual Health company, OnMed, to deploy a custom OnMed
                        Care Station on the Tuskegee campus. The Tuskegee OnMed
                        Care Station allows Tuskegee students, faculty and staff
                        to have 24/7 access to most Primary Care services and
                        elevates the University’s commitment to enhancing
                        student experience through extended access to quality
                        healthcare and compliments their current student health
                        center service.
                    </p>
                }
                body={
                    <>
                        <p>
                            Tuskegee University, a preeminent Historical Black
                            College and University (HBCU), has partnered with
                            Virtual Health company OnMed to deploy a custom
                            OnMed Care Station on the Tuskegee campus. The
                            Tuskegee OnMed Care Station allows Tuskegee
                            students, faculty and staff to have extended hours
                            access to most Primary Care services and elevates
                            the University’s commitment to enhancing student
                            experience through extended access to quality
                            healthcare and complements their current student
                            health center service.
                        </p>

                        <p>
                            Tuskegee’s investment into the OnMed Virtual Care
                            Platform is consistent with the goals and objectives
                            of the University’s strategic plan. In addition,
                            through Tuskegee’s leadership of the Center for
                            Rural Health and Economic Equity the OnMed Care
                            Station will be available at no cost to the citizens
                            of the community and Macon County.
                        </p>

                        <p>
                            Tuskegee University President Dr. Charlotte P.
                            Morris commented on Tuskegee’s investment into the
                            OnMed Care Station and Tele-Health services,
                            “Tuskegee University has a long history of bringing
                            trusted healthcare to rural spaces in the state of
                            Alabama and worldwide,” she said. “Hosting the very
                            first OnMed Care Station in the state of Alabama is
                            another affirmative step that Tuskegee University
                            has taken to build on our community and strategic
                            partnerships by providing healthcare after hours and
                            on weekends for students and residents of Tuskegee.
                            We hope this pilot station will extend across the
                            Alabama black belt counties and provide healthcare
                            services for even more residents.”
                        </p>

                        <p>
                            The Tuskegee University OnMed Care Station features
                            a fully customized Tuskegee University branded
                            exterior and is prominently located in the atrium of
                            the Margaret Murray Washington Hall building just
                            inside the Lincoln gates at the Tuskegee University
                            campus. Students, faculty, and staff along with the
                            general public can access the Care Station,
                            providing patients with a quality health care option
                            along with the regular daytime hours of the Student
                            Health Center. OnMed clinicians work with the
                            University Health Center to coordinate necessary
                            follow-up or extended care required. OnMed
                            clinicians can prescribe medications via
                            e-prescriptions at the time of visit to the local
                            pharmacy.
                        </p>

                        <p>
                            With regards to OnMed’s partnership with Tuskegee
                            University, Tom Vanderheyden, CEO of OnMed, said,
                            “We couldn’t be more excited and prouder of our
                            partnership with Tuskegee University. They represent
                            the best reflection of our mission and purpose and
                            certainly the quality of partners we aspire to have.
                            We are committed to working with the leadership of
                            Tuskegee and their broader constituents to advance
                            the core tenets of access and affordability across
                            the region and the country, and to deliver a valued
                            health care experience to their students, faculty,
                            and staff.”
                        </p>

                        <p className="fw-bold">About Tuskegee University</p>

                        <p>
                            Tuskegee University was founded in 1881 and remains
                            one of the preeminent Historical Black Colleges and
                            Universities in the country. The University has been
                            a pioneer and leader in education and the
                            advancement of awareness and progress of both social
                            and historical significance. In 1965 Tuskegee
                            University was declared a National Historic Landmark
                            for the significance of its academic programs, its
                            role in higher education for African Americans, and
                            its status in United States history. Today, the
                            University serves over 3000 students and employs
                            over 800 faculty and staff. Tuskegee University is
                            consistently ranked as one of the top Universities
                            in the country.
                        </p>

                        <p className="fw-bold">About OnMed</p>

                        <p>
                            OnMed is an innovative leader in the Virtual Care
                            space offering primary care and urgent care through
                            their patented OnMed Care Station and Virtual
                            Medical Center. OnMed utilizes a proprietary system
                            of diagnostic and interactive technologies to
                            provide a highly personalized patient consult and
                            treatment experience that is designed to duplicate a
                            traditional in-office clinic visit. The OnMed
                            Virtual Care Platform has the capability to dispense
                            OTC and Prescription medications at the time of
                            visit or e-prescribe medications to a preferred
                            pharmacy depending on local regulatory requirements.
                            OnMed partners with local Provider Systems and
                            Payers to provide referrals and member
                            reimbursement. OnMed is actively working with
                            Governments and Public Entities, Payers, Provider
                            Systems, Colleges and Universities, Large Employers
                            and High Traffic Venues to offer a high-quality
                            affordable healthcare experience through its
                            proprietary Virtual Care Platform. The full-service
                            OnMed Virtual Care Platform offers a unique and
                            substantive alternative to the challenges of
                            building and deploying traditional brick and mortar
                            Primary Care clinics and the required operating and
                            staffing requirements.
                        </p>
                    </>
                }
            />
        </Layout>
    );
};

export default NewStoryTuskegee;

export const Head = () => (
    <>
        <title>Tuskegee University News Story - OnMed</title>
        <MetaTags></MetaTags>
    </>
);
