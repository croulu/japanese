import React from "react";

import {Syllable} from "../../domain/Syllable";
import {SyllableRomaji} from "../../domain/SyllableRomaji";
import {SyllableKana} from "../../domain/SyllableKana";

export const Proposal = (props: { syllable:Syllable, isKanaToGuess:boolean, handleClick:(syllable: Syllable)=>void }) => {
    const { syllable, isKanaToGuess, handleClick } = props;

    let displayProposal:string;
    if (isKanaToGuess) {
        const syllableRomaji = new SyllableRomaji(syllable.alphabet, syllable.consonant, syllable.vowel);
        displayProposal = syllableRomaji.display();
    } else {
        const syllableKana = new SyllableKana(syllable.alphabet, syllable.consonant, syllable.vowel);
        displayProposal = syllableKana.display();
    }

    return (
        <div className="playKanaChoiceItem">
            <div> <a onClick={() => handleClick(syllable)}>
                {displayProposal}
            </a></div>
        </div>
    );
};
