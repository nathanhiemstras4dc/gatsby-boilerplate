import React from "react";
import LayoutDocs from "../../components/layout-docs";
import DocsTypography from "./typography";
import DocsColor from "./color";
import DocsSpacing from "./spacing";
import DocsLists from "./lists";
import DocsForms from "./forms";
import DocsButtons from "./buttons";

const DocsPage = () => {
    return (
        <LayoutDocs>
            <h1 className="mb-5">Docs</h1>

            <hr className="my-6" />
            <h2 className="mb-5">Utilities</h2>
            <DocsTypography />
            <DocsColor />
            <DocsSpacing />

            <h2 className="my-6">Components</h2>
            <DocsButtons />
            <DocsForms />
            <DocsLists />
        </LayoutDocs>
    );
};

export default DocsPage;
