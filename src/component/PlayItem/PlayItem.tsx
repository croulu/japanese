import React from "react";

import {Syllable} from "../../domain/Syllable";
import { Proposal } from "./Proposal";
import {GuessSyllable} from "../../domain/GuessSyllable";
import {SyllableKana} from "../../domain/SyllableKana";

export const PlayItem = (props: { syllableToGuess:GuessSyllable }) => {
    const { syllableToGuess } = props;

    const kanaToGuess:SyllableKana = new SyllableKana(syllableToGuess.syllable.alphabet,
        syllableToGuess.syllable.consonant, syllableToGuess.syllable.vowel);

    return (
        <div className="playKana">
            <div className="playItemKana">{kanaToGuess.display()}</div>
            {
                syllableToGuess.syllables.map((syllable:Syllable) =>
                        <Proposal key={syllable.id} syllable={syllable} />)
            }
        </div>
    );
};
