import React from "react";

const CardColsSecondary = (props) => {
    const colImgPadding = props.imgAlignRight
        ? "ps-lg-3 ps-xl-6X"
        : "pe-lg-3 pe-xl-6X";
    const colTextPadding = props.imgAlignRight
        ? "pe-lg-3 pe-xl-6x"
        : "ps-lg-3 ps-xl-6x";
    const colImgOrderg = props.imgAlignRight ? " order-md-2 " : "";

    return (
        <section className="container card-cols">
            <div className="card-cols--item row my-md-6 py-md-5">
                <div className={"card-cols--img col-md-6 " + colImgOrderg}>
                    <div className={colImgPadding}>{props.img}</div>
                </div>
                <div className="card-cols--text col-md-6">
                    <div className="py-3 p-md-0">
                        <div className={colTextPadding}>
                            <h2 className="mt-3 text-primary">
                                {props.headline}
                            </h2>
                            {props.body}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardColsSecondary;
