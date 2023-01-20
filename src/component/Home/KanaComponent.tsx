import React from "react";

import {Syllable} from "../../domain/Syllable";
import {SyllableKana} from "../../domain/SyllableKana";

export const KanaComponent = (props: { syllable: Syllable }) => {
    const { syllable } = props;
    const oneKana = new SyllableKana(syllable.alphabet, syllable.consonant, syllable.vowel)
    return (
        <>{oneKana.display()}</>
    );
};
