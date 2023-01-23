import React from "react";

import {Syllable} from "../../domain/Syllable";
import {Practice} from "../../domain/Practice";

export const PlayItem = (props: { syllables:Array<Syllable> }) => {
    const { syllables } = props;

    const practice = new Practice(syllables);

    console.log(practice.syllablesPracticeSet);

    return (
        <div className="page-block-content">
            <div>
                Je joue au Kana!
            </div>
        </div>
    );
};
