import React from "react";
import { loremIpsum } from "react-lorem-ipsum";

const DocsLists = () => {
    const listItem1 =
        "List item one. " +
        loremIpsum({
            avgWordsPerSentence: 5,
            avgSentencesPerParagraph: 1,
        });
    const listItem2 =
        "List item two. " +
        loremIpsum({
            avgWordsPerSentence: 5,
            avgSentencesPerParagraph: 4,
        });
    const listItem3 =
        "List item three. " +
        loremIpsum({
            avgWordsPerSentence: 9,
            avgSentencesPerParagraph: 1,
        });
    const listItem4 =
        "List item four. " +
        loremIpsum({
            avgWordsPerSentence: 2,
            avgSentencesPerParagraph: 1,
        });
    const lists = (
        <section className="docs docs__section">
            <h3>Lists</h3>
            <ul>
                <li>{listItem1}</li>
                <li>{listItem2}</li>
                <li>{listItem3}</li>
                <li>{listItem4}</li>
            </ul>
            <h5 className="mt-6">Unstyled</h5>
            <ul className="list-unstyled">
                <li>{listItem1}</li>
                <li>{listItem2}</li>
                <li>{listItem3}</li>
                <li>{listItem4}</li>
            </ul>
            <h5 className="mt-6">Inline</h5>
            <ul className="list-unstyled list-inline">
                <li className="list-inline-item">List item one</li>
                <li className="list-inline-item">List item two</li>
                <li className="list-inline-item">List item three</li>
                <li className="list-inline-item">List item four</li>
            </ul>
        </section>
    );

    return <>{lists}</>;
};

export default DocsLists;
