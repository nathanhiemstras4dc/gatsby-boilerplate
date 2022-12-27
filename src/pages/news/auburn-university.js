import * as React from "react";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import NewsStory from "../../components/news-story";
import MetaTags from "../../components/meta-tags";

const sectionHero = (
    <Hero heroSecondary={true}>
        OnMed will Partner with Auburn University for Rural Health Project
    </Hero>
);

const NewStoryAuburn = ({ data }) => {
    return (
        <Layout>
            {sectionHero}
            <NewsStory
                lead={
                    <p>
                        OnMed will partner with Auburn University, along with
                        the city of LaFayette and the Chambers County Commission
                        to offer a wide variety of health and wellness services
                        to the community.
                    </p>
                }
                img="/images/logos/auburn-university-logo.png"
                body={
                    <>
                        <p>
                            The OnMed Care Station will be available to
                            community members for convenient access to
                            affordable primary care, including diagnosis,
                            referral, prescription, and treatment options. The
                            OnMed Care Station will be located in the new
                            Chambers County Community Health and Wellness Center
                            in Lafayette, Alabama.
                        </p>
                        <p>
                            As a land grant university dedicated to improving
                            the lives of people throughout Alabama, Auburn
                            University is proud to launch their Rural Health
                            Project in Lafayette, Alabama. Auburn University
                            faculty, staff and students will be participating in
                            community events and through the Center to provide
                            services including medication management support,
                            education for self-care of chronic conditions,
                            exercise and nutrition programs, COVID-19 vaccines
                            and testing along with speech, language, and hearing
                            evaluations.
                        </p>
                    </>
                }
            />
        </Layout>
    );
};

export default NewStoryAuburn;

export const Head = () => (
    <>
        <title>Auburn University News Story - OnMed</title>
        <MetaTags></MetaTags>
    </>
);
