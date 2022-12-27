import React from "react";

const DocsColor = () => {
    return (
        <>
            <section className="docs docs__section">
                <h2 className="mt-2">Colors</h2>

                <ul className="row list-unstyled my-4 mx-0">
                    <li className="col-12 col-sm-8 col-md-6 col-lg-4 p-4 m-0 bg-primary text-light">
                        #3926b3
                        <br />
                        $purple <br />
                        $primary
                    </li>

                    <li className="col-12 col-sm-8 col-md-6 col-lg-4 p-4 m-0 bg-danger text-light">
                        #f5222d
                        <br />
                        $red <br />
                        $danger
                    </li>

                    <li className="col-12 col-sm-8 col-md-6 col-lg-4 p-4 m-0 bg-success text-light">
                        #30bc97
                        <br />
                        $green <br />
                        $success
                    </li>

                    <li className="col-12 col-sm-8 col-md-6 col-lg-4 p-4 m-0 bg-warning text-light">
                        #ffc107
                        <br />
                        $yellow <br />
                        $warning
                    </li>

                    <li className="col-12 col-sm-8 col-md-6 col-lg-4 p-4 m-0 bg-dark text-light">
                        #202020
                        <br />
                        $dark <br />
                        $gray-900
                        <br />
                    </li>

                    <li className="col-12 col-sm-8 col-md-6 col-lg-4 p-4 m-0 bg-light ">
                        #ffffff
                        <br />
                        $light <br />
                        $gray-100
                        <br />
                    </li>
                </ul>

                <ul className="list-unstyled my-4 mx-0">
                    <li className="p-2 text-dark">
                        .text-dark{" "}
                        <span className="small">(#202020 - $gray-900)</span>
                    </li>
                    <li className="p-2 text-body">
                        .text-body{" "}
                        <span className="small">
                            (#595959 - $gray-800) (default)
                        </span>
                    </li>
                    <li className="p-2 text-muted">
                        .text-muted{" "}
                        <span className="small">(#8c8c8c - $gray-700)</span>
                    </li>
                    <li className="p-2 text-disabled">
                        .text-disabled{" "}
                        <span className="small">(#bfbfbf - $gray-600)</span>
                    </li>
                    <li className="p-2 text-light bg-dark">.text-light</li>
                    <li className="p-2 text-primary">.text-primary</li>
                    <li className="p-2 text-primary-light">
                        .text-primary-light
                    </li>
                    <li className="p-2 text-success">.text-success</li>
                    <li className="p-2 text-warning">.text-warning</li>
                    <li className="p-2 text-danger">.text-danger</li>
                </ul>
            </section>
        </>
    );
};

export default DocsColor;
