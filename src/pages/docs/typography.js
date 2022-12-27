import React from "react";
import { Table } from "react-bootstrap";

const DocsTypography = () => {
    const fpo =
        " is a great font. Let's use it all over this website for all the words on the website. Do you know what I mean? It's such a great idea!";
    const fpoHeadline =
        " is a great font. Let's use it all over this website for all the HEADLINES on the website. Do you know what I mean? It's such a great idea!";
    const fpoBold = fpo;
    const font = "Open Sans";
    const fontHeadline = "Quatro";
    return (
        <>
            <section className="docs docs__section">
                <h2>Typography</h2>
                <hr className="my-5" />
                <h4>Text Size</h4>
                <Table responsive="md">
                    <thead>
                        <tr>
                            <th>
                                <span className="d-none">Class</span>
                            </th>
                            <th>Regular</th>
                            <th>Bold</th>
                            <th>
                                Font size /{" "}
                                <span className="text-nowrap">line height</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Default</td>
                            <td>
                                {font} {fpo}
                            </td>
                            <td>
                                <span className="fw-bold">
                                    {font} {fpoBold}
                                </span>
                            </td>
                            <td>16/28</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">
                                <code>.lead</code>
                            </td>
                            <td>
                                <span className="lead">
                                    {font} {fpo}
                                </span>
                            </td>
                            <td>
                                <span className="lead fw-bold">
                                    {font} {fpoBold}
                                </span>
                            </td>
                            <td>20/28</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">
                                <code>.small </code>
                            </td>
                            <td>
                                <span className="small">
                                    {font} {fpo}
                                </span>
                            </td>
                            <td>
                                <span className="small fw-bold">
                                    {font} {fpoBold}
                                </span>
                            </td>
                            <td>14/22</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">
                                <code>.tiny</code>
                            </td>
                            <td>
                                <span className="tiny">
                                    {font} {fpo}
                                </span>
                            </td>
                            <td>
                                <span className="tiny fw-bold">
                                    {font} {fpoBold}
                                </span>
                            </td>
                            <td>12/20</td>
                        </tr>
                    </tbody>
                </Table>

                <h5 className="mt-5 pt-5">Headlines</h5>

                <Table responsive="md">
                    <tbody>
                        <tr>
                            <td>
                                <h1 className="h1">
                                    h1 - {fontHeadline} {fpoHeadline}
                                </h1>
                            </td>
                            <td>80/97</td>
                            <td>0.04em</td>
                            <td>300 / Light</td>
                        </tr>
                        <tr>
                            <td>
                                <h2 className="h2">
                                    h2 - {fontHeadline} {fpoHeadline}
                                </h2>
                            </td>
                            <td>64/80</td>
                            <td>0.02em</td>
                            <td>300 / Light</td>
                        </tr>
                        <tr>
                            <td>
                                <h3 className="h3">
                                    h3 - {fontHeadline} {fpoHeadline}
                                </h3>
                            </td>
                            <td>52/68</td>
                            <td>0.02em</td>
                            <td>300 / Light</td>
                        </tr>
                        <tr>
                            <td>
                                <h4 className="h4">
                                    h4 - {fontHeadline} {fpoHeadline}
                                </h4>
                            </td>
                            <td>32/46</td>
                            <td>0</td>
                            <td>400 / Regular</td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="h5">
                                    h5 - {fontHeadline} {fpoHeadline}
                                </h5>
                            </td>
                            <td>28/34</td>
                            <td>0</td>
                            <td>500 / Medium</td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="h6">
                                    h6 - {fontHeadline} {fpoHeadline}
                                </h6>
                            </td>
                            <td>18/22</td>
                            <td>0.04em</td>
                            <td>700 / Bold</td>
                        </tr>
                        <tr>
                            <td>
                                <h7 className="h7">
                                    h7 - {fontHeadline} {fpoHeadline}
                                </h7>
                            </td>
                            <td>15/18</td>
                            <td>0.04em</td>
                            <td>600 / SemiBold</td>
                        </tr>
                        <tr>
                            <td>
                                <span className="h8">
                                    h8 - {fontHeadline} {fpoHeadline}
                                </span>
                            </td>
                            <td>14/16</td>
                            <td>0</td>
                            <td>500 / Medium</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </>
    );
};

export default DocsTypography;
