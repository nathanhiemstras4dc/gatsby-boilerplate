import React from "react";

const DocsSpacing = () => {
    const spacing = (
        <section className="docs docs__section">
            <h4>Spacing</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Variable</th>
                        <th>REM</th>
                        <th>Pixels</th>
                        <th>Visualize</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-row-key="0">
                        <td>
                            <code>$spacing-1</code>
                        </td>
                        <td>0.25rem</td>
                        <td>4px</td>
                        <td>
                            <span className="pe-1 pb-1 d-inline-block docs__bg"></span>
                        </td>
                    </tr>
                    <tr data-row-key="1">
                        <td>
                            <code>$spacing-2</code>
                        </td>
                        <td>0.5rem</td>
                        <td>8px</td>
                        <td>
                            <span className="pe-2 pb-2 d-inline-block docs__bg"></span>
                        </td>
                    </tr>
                    <tr data-row-key="2">
                        <td>
                            <code>$spacing-3</code>
                        </td>
                        <td>1em</td>
                        <td>16px</td>
                        <td>
                            <span className="pe-3 pb-3 d-inline-block docs__bg"></span>
                        </td>
                    </tr>
                    <tr data-row-key="3">
                        <td>
                            <code>$spacing-4</code>
                        </td>
                        <td>1.5rem</td>
                        <td>24px</td>
                        <td>
                            <span className="pe-4 pb-4 d-inline-block docs__bg"></span>
                        </td>
                    </tr>
                    <tr data-row-key="4">
                        <td>
                            <code>$spacing-5</code>
                        </td>
                        <td>2em</td>
                        <td>32px</td>
                        <td>
                            <span className="pe-5 pb-5 d-inline-block docs__bg"></span>
                        </td>
                    </tr>
                    <tr data-row-key="5">
                        <td>
                            <code>$spacing-6</code>
                        </td>
                        <td>3em</td>
                        <td>48px</td>
                        <td>
                            <span className="pe-6 pb-6 d-inline-block docs__bg"></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );

    const padding = (
        <section className="docs docs__section">
            <h4 className="">Padding</h4>
            <p>
                We use "start/end" instead of "left/right"
                <span className="ps-5 d-inline-block me-4 docs__bg">
                    <code>.ps-5</code>
                </span>{" "}
                <span className="pe-5 d-inline-block me-4 docs__bg">
                    <code>.pe-5</code>
                </span>
            </p>
            <p>
                Still in use: <code>-x</code>, <code>-y</code>, <code>-t</code>,{" "}
                <code>-b</code>.
            </p>
            <span className="p-0 me-3 d-inline-block docs__bg">
                <code>.p-0</code>
            </span>
            <span className="p-1 me-3 d-inline-block docs__bg">
                <code>.p-1</code>
            </span>
            <span className="p-2 me-3 d-inline-block docs__bg">
                <code>.p-2</code>
            </span>
            <span className="p-3 me-3 d-inline-block docs__bg">
                <code>.p-3</code>
            </span>
            <span className="p-4 me-3 d-inline-block docs__bg">
                <code>.p-4</code>
            </span>
            <span className="p-5 me-3 d-inline-block docs__bg">
                <code>.p-5</code>
            </span>
            <span className="p-6 me-3 d-inline-block docs__bg">
                <code>.p-6</code>
            </span>
        </section>
    );

    const margin = (
        <section className="docs docs__section">
            <h4>Margin</h4>
            <p>
                We use "start/end" instead of "left/right":
                <span className="d-inline-block mx-3 docs__bg">
                    <span className="ms-5 d-inline-block docs__bg--reverse">
                        <code>.ms-5</code>
                    </span>
                </span>
                <span className="d-inline-block mx-3 docs__bg">
                    <span className="me-5 d-inline-block docs__bg--reverse">
                        <code>.me-5</code>
                    </span>
                </span>
            </p>
            <p>
                Still in use: <code>-x</code>, <code>-y</code>, <code>-t</code>,{" "}
                <code>-b</code>.
            </p>
            <span className="d-inline-block me-3 docs__bg">
                <span className="m-0 d-inline-block docs__bg--reverse">
                    <code>.m-0</code>
                </span>
            </span>
            <span className="d-inline-block me-3 docs__bg">
                <span className="m-1 d-inline-block docs__bg--reverse">
                    <code>.m-1</code>
                </span>
            </span>
            <span className="d-inline-block me-3 docs__bg">
                <span className="m-2 d-inline-block docs__bg--reverse">
                    <code>.m-2</code>
                </span>
            </span>
            <span className="d-inline-block me-3 docs__bg">
                <span className="m-3 d-inline-block docs__bg--reverse">
                    <code>.m-3</code>
                </span>
            </span>
            <span className="d-inline-block me-3 docs__bg">
                <span className="m-4 d-inline-block docs__bg--reverse">
                    <code>.m-4</code>
                </span>
            </span>
            <span className="d-inline-block me-3 docs__bg">
                <span className="m-5 d-inline-block docs__bg--reverse">
                    <code>.m-5</code>
                </span>
            </span>
            <span className="d-inline-block me-3 docs__bg">
                <span className="m-6 d-inline-block docs__bg--reverse">
                    <code>.m-6</code>
                </span>
            </span>
            <h5 className=" mt-6">Negative Margin</h5>
            <p className="mb-6">
                Just add <code>n</code> before the number.
            </p>
            <hr />
            <div className="d-flex">
                <div className="me-3 docs__bg">
                    <span className="mt-4 d-inline-block docs__bg--reverse">
                        <code>.mt-4</code>
                    </span>
                </div>
                <div className="me-3 docs__bg mt-n4 ">
                    <span className="d-inline-block docs__bg--reverse">
                        <code>.mt-n4</code>
                    </span>
                </div>
            </div>
        </section>
    );

    const breakpoints = (
        <section className="docs docs__section">
            <h4>Breakpoints</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Key</th>
                        <th>Breakpoint</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-row-key="1">
                        <td>X-Small</td>
                        <td>(none)</td>
                        <td>&lt; 576px</td>
                    </tr>
                    <tr data-row-key="2">
                        <td>Small</td>
                        <td>sm</td>
                        <td>&gt; 576px</td>
                    </tr>
                    <tr data-row-key="3">
                        <td>Medium</td>
                        <td>md</td>
                        <td>&gt; 768px</td>
                    </tr>
                    <tr data-row-key="4">
                        <td>Large</td>
                        <td>lg</td>
                        <td>&gt; 992px</td>
                    </tr>
                    <tr data-row-key="5">
                        <td>Extra large</td>
                        <td>xl</td>
                        <td>&gt; 1260px</td>
                    </tr>
                    <tr data-row-key="6">
                        <td>Extra extra large</td>
                        <td>xxl</td>
                        <td>&gt; 1400px</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );

    return (
        <>
            {spacing}
            {padding}
            {margin}
            {breakpoints}
        </>
    );
};

export default DocsSpacing;
