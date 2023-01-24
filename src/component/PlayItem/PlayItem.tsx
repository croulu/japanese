import React from "react";

import { Proposal } from "./Proposal";
import {Syllable} from "../../domain/Syllable";
import {GuessSyllable} from "../../domain/GuessSyllable";

export const PlayItem = (props: { syllableToGuess:GuessSyllable }) => {
    const { syllableToGuess } = props;

    const handleProposalClick = (syllable:Syllable) => {
        console.log("chez le parent");
        console.log(syllable.id);
    }

    return (
        <div className="playKana">
            <div className="playItemKana">{syllableToGuess.useDisplay()}</div>
            {
                syllableToGuess.syllables.map((syllable:Syllable) =>
                        <Proposal key={syllable.id}
                                  syllable={syllable}
                                  isKanaToGuess={syllableToGuess.isKanaToGuess}
                                  handleClick={handleProposalClick} />)
            }
        </div>
    );
};
