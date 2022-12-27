import React from "react";

const CardCols = (props) => {
    const colImgPadding = props.imgAlignRight
        ? "ps-lg-3 ps-xl-6"
        : "pe-lg-3 pe-xl-6";
    const colTextPadding = props.imgAlignRight
        ? "pe-lg-3 pe-xl-6"
        : "ps-lg-3 ps-xl-6";
    const colImgOrderg = props.imgAlignRight ? " order-md-2 " : "";

    const colImgFlush = props.imgFlush ? " card-cols--item_flush " : "";

    return (
        <div className={`card-cols--item row my-md-6 py-md-3 ${colImgFlush}`}>
            <div className={"card-cols--img col-md-6 " + colImgOrderg}>
                <div className={colImgPadding}>{props.img}</div>
            </div>
            <div className="card-cols--text col-md-6">
                <div className="card-cols--text-inner">
                    <div className={colTextPadding}>
                        <span className="h8 text-uppercase text-primary">
                            {props.title}
                        </span>
                        <h4 className="mt-3">{props.headline}</h4>
                        {props.body}
                        <p
                            className="h7 mt-6 pt-5 "
                            style={{ marginBottom: "0" }}
                        >
                            {props.cta}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCols;
