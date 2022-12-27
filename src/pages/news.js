import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import MetaTags from "../components/meta-tags";
import Hero from "../components/hero";
import { ImgHeroGrabbingPillBottles } from "../components/images/heroes/grabbing-pill-bottles";
import { ImgNewsTuskegee } from "../components/images/news/tuskegee";
import { ImgNewsTuskegeeVideo } from "../components/images/news/tuskegee-video";
import { ImgNewsPurchasingSolutionsAlliance } from "../components/images/news/purchasing-solutions-alliance";
import { ImgNewsAuburnTigers } from "../components/images/news/auburn-tigers";

const NewsItem = (props) => {
    const category = props.category
        ? `<p className="text-uppercase mb-0">${props.category}</p>`
        : "";
    const title = props.title ? props.title : "Title";
    const body = props.body
        ? props.body
        : "Donec sed odio dui. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauri.";
    const author = props.author ? props.author : "";
    const date = props.date ? props.date : "";
    const slugPrefix = props.slug.startsWith("http") ? "" : "/news/";
    const slugTarget = props.slug.startsWith("http") ? "_blank" : "_self";

    return (
        <div className="col-md-6 my-5 my-md-6 position-relative">
            {props.img}
            {category}

            <h5 className="mt-2">
                <Link
                    to={`${slugPrefix}${props.slug}`}
                    className="text-dark link-no-underline stretched-link"
                    target={slugTarget}
                    rel="noopener noreferrer"
                >
                    {title}
                </Link>
            </h5>
            <p>{body}</p>
            <div className="row mt-4">
                <div className="col">{author}</div>
                <div className="col-auto text-end">{date}</div>
            </div>
        </div>
    );
};

const NewsPage = ({ data }) => {
    const sectionHero = (
        <Hero
            img={<ImgHeroGrabbingPillBottles alt="News" position="60% 50%" />}
        >
            News
        </Hero>
    );

    const sectionOnMedNews = (
        <section className="container py-4 py-md-6">
            <h1 className="text-center text-primary mb-6">OnMed News</h1>
            <div className="row gx-md-6">
                <NewsItem
                    title="WSFA 12 Covers the Rollout of the OnMed Care Station at Tuskegee University"
                    body="WSFA 12 News interviews OnMed CEO Tom Vanderheyden about the OnMed Virtual Care Clinic on Tuskegee University's campus..."
                    date="November 2, 2022"
                    img={<ImgNewsTuskegeeVideo className="mb-4" />}
                    slug="https://www.wsfa.com/video/2022/11/02/hometown-tour-new-onmed-virtual-care-clinic-tuskegee-campus/"
                />
                <NewsItem
                    title="Tuskegee University and OnMed Announce Partnership to Deliver Innovative Virtual Care Clinic and Services"
                    body="Tuskegee University, a preeminent Historical Black College and University (HBCU), has partnered with Virtual Health..."
                    date="September 9, 2022"
                    img={<ImgNewsTuskegee className="mb-4" />}
                    slug="tuskegee-university"
                />
                <NewsItem
                    title="Purchasing Solutions Alliance awards Virtual Health Clinics contract to OnMed"
                    body="OnMed has been selected to provide Virtual Health Clinics and Services to PSA Public Agency members..."
                    img={
                        <ImgNewsPurchasingSolutionsAlliance className="mb-4" />
                    }
                    slug="purchasing-solutions-alliance"
                />
                <NewsItem
                    title="OnMed will Partner with Auburn University for Rural Health Project"
                    body="OnMed will partner with Auburn University, along with the city of LaFayette and the Chambers County Commission to offer a wide variety of health and wellness services to the community..."
                    img={<ImgNewsAuburnTigers className="mb-4" />}
                    slug="auburn-university"
                />
            </div>
        </section>
    );

    return (
        <Layout>
            {sectionHero}
            {sectionOnMedNews}
        </Layout>
    );
};

export default NewsPage;

export const Head = () => (
    <>
        <title>News about OnMed</title>
        <MetaTags></MetaTags>
    </>
);
