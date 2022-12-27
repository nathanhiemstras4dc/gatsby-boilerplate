import React from "react";

const ListFigureGrid = (props) => {
    const inlineArrowsClass = props.inlineArrows ? " list-inline-arrows " : "";
    const hasIconsClass = props.hasIcons ? " list-figure-grid_has-icons " : "";
    return (
        <ol
            className={`list-figure-grid list-unstyled text-dark row mb-0  ${inlineArrowsClass} ${hasIconsClass}`}
        >
            {props.children}
        </ol>
    );
};

export default ListFigureGrid;
