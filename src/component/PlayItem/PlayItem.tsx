import React from "react";

import {Syllable} from "../../domain/Syllable";
import {Practice} from "../../domain/Practice";
import {SyllableKana} from "../../domain/SyllableKana";

export const PlayItem = (props: { syllables:Array<Syllable> }) => {
    const { syllables } = props;

    const practice:Practice = new Practice(syllables);
    const kanaToGuess:SyllableKana = practice.next();

    return (
        <div className="page-block-content">
            <div className="playItemKana">{kanaToGuess.display()}</div>
        </div>
    );
};
