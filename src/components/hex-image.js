import React from "react";

const HexImage = (props) => {
    const classNameCompiled = "mask-image--hex " + props.className;
    return (
        <div
            className={classNameCompiled}
            style={{ backgroundImage: `url(${props.imgSrc})` }}
        >
            <span className="visually-hidden">{props.alt}</span>
        </div>
    );
};

export default HexImage;
