import React from "react";

const ListFigureGridItem = (props) => {
    return (
        <li className="col-md my-5">
            <div className="row list-figure-grid--row">
                <div className="list-figure-grid--img list-inline-arrows--target col-auto col-md-12">
                    {props.img}
                </div>
                <div className="list-figure-grid--text col col-md-12 mt-3">
                    <h5 className="text-primary mb-3">{props.headline}</h5>
                    {props.body}
                </div>
            </div>
        </li>
    );
};

export default ListFigureGridItem;
