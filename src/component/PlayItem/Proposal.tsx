import React from "react";

import {Syllable} from "../../domain/Syllable";

export const Proposal = (props: { syllable:Syllable }) => {
    const { syllable } = props;

    return (
        <div className="page-block-content">
            <div>{syllable.id}</div>
        </div>
    );
};
