import React from "react";
import ListFigureGrid from "../components/list-figure-grid";
import ListFigureGridItem from "../components/list-figure-grid-item";

const KeyAudienceSellingPoints = (props) => {
    return (
        <>
            <h2 className="text-center mb-5">
                The OnMed Care Station Experience
            </h2>
            <ListFigureGrid hasIcons={true}>
                <ListFigureGridItem
                    headline="Clean"
                    body={
                        <p>
                            The Care Station is carefully sanitized using UV
                            lighting
                        </p>
                    }
                    img={<img src="/icons/icon-sunset.svg" alt="Sunset icon" />}
                />
                <ListFigureGridItem
                    headline="Private"
                    body={
                        <p>
                            Privacy when in use with LCD glass that is fogged
                            completely when activated
                        </p>
                    }
                    img={
                        <img
                            src="/icons/icon-eye-disabled.svg"
                            alt="Eyeball with slash icon"
                        />
                    }
                />
                <ListFigureGridItem
                    headline="Accessible"
                    body={
                        <p>
                            Services available to anyone, anywhere, including
                            rural and remote areas
                        </p>
                    }
                    img={<img src="/icons/icon-map.svg" alt="Map icon" />}
                />
                <div className="w-100"></div>
                <div className="w-100"></div>
                <ListFigureGridItem
                    headline="Affordable"
                    body={
                        <p>
                            Works with major insurance and only a fraction of
                            the cost of a traditional doctor's office visit
                        </p>
                    }
                    img={
                        <img
                            src="/icons/icon-get-money.svg"
                            alt="Hands and dollar symbol icon"
                        />
                    }
                />
                <ListFigureGridItem
                    headline="Secure"
                    body={
                        <p>
                            HIPAA compliant transfer and storage of all patient
                            data using advanced encryption technology
                        </p>
                    }
                    img={<img src="/icons/icon-lock.svg" alt="Lock icon" />}
                />
                <ListFigureGridItem
                    headline="Convenient"
                    body={
                        <p>
                            Open 7 days a week with extended hours and no
                            appointment needed
                        </p>
                    }
                    img={<img src="/icons/icon-clock.svg" alt="Clock icon" />}
                />
            </ListFigureGrid>
        </>
    );
};

export default KeyAudienceSellingPoints;
