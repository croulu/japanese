import React from "react";

import {Syllable} from "../../domain/Syllable";
import {SyllableKana} from "../../domain/SyllableKana";
import {SyllableRomaji} from "../../domain/SyllableRomaji";

export const SyllablePicture = (props: { syllable: Syllable }) => {
    const { syllable } = props;
    const oneKana = new SyllableKana(syllable.alphabet, syllable.consonant, syllable.vowel)
    const oneRomaji = new SyllableRomaji(syllable.alphabet, syllable.consonant, syllable.vowel)
    return (
        <div>
            <div className="romajiToLearn">
                {oneRomaji.display()}
            </div>
            <div className="kanaToLearn">
                {oneKana.display()}
            </div>
        </div>
    );
};
