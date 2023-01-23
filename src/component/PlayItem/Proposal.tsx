import React from "react";

import {Syllable} from "../../domain/Syllable";
import {SyllableRomaji} from "../../domain/SyllableRomaji";

export const Proposal = (props: { syllable:Syllable }) => {
    const { syllable } = props;

    const syllableRomaji = new SyllableRomaji(syllable.alphabet, syllable.consonant, syllable.vowel);

    return (
        <div className="playKanaChoiceItem">
            <div>{syllableRomaji.display()}</div>
        </div>
    );
};
