import React from "react";

import {Syllable} from "../../domain/Syllable";

export const PlayItem = (props: { syllables:Syllable }) => {
    const { syllables } = props;

    return (
        <div className="page-block-content">
            <div>
                Je joue au Kana!
            </div>
        </div>
    );
};
