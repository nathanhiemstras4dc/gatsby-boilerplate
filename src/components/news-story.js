import React from "react";

const NewsStory = (props) => {
    const headline = props.headline
        ? `<h1 class="h2 text-primary mt-4 mb-6">
    ${props.headline}
</h1>`
        : "";
    const img = props.img
        ? `<img class="mb-6" style="max-height: 100px;" src="${props.img}">`
        : "";
    return (
        <section className="container py-4 py-md-6 news-story">
            <div className="row gx-md-6 justify-content-center">
                <div className="col-md-10 col-lg-9">
                    {props.date} {props.category}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: headline,
                        }}
                    ></div>
                    <div
                        className="news-story--lead lead text-dark"
                        style={{ fontWeight: "600" }}
                    >
                        {props.lead}
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: img,
                        }}
                    ></div>
                    <div className="news-story--body">{props.body}</div>
                </div>
            </div>
        </section>
    );
};

export default NewsStory;
