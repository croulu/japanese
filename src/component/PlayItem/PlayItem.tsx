import React from "react";

import {Syllable} from "../../domain/Syllable";
import { Proposal } from "./Proposal";
import {GuessSyllable} from "../../domain/GuessSyllable";

export const PlayItem = (props: { syllableToGuess:GuessSyllable }) => {
    const { syllableToGuess } = props;

    return (
        <div className="playKana">
            <div className="playItemKana">{syllableToGuess.useDisplay()}</div>
            {
                syllableToGuess.syllables.map((syllable:Syllable) =>
                        <Proposal key={syllable.id} syllable={syllable} isKanaToGuess={syllableToGuess.isKanaToGuess} />)
            }
        </div>
    );
};
