import React from "react";

function Hero(props) {
    const { children, fluid } = props;
    const heroClass = props.heroSecondary ? " hero--secondary " : "";
    return (
        <div className={`hero ${heroClass}`}>
            <div>
                <div className="hero--bg-img">{props.img}</div>
                <div className="hero--overlay">
                    <h1 className="text-white mb-0">{children}</h1>
                </div>
            </div>
        </div>
    );
}

export default Hero;
