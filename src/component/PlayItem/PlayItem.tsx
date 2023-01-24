import React, {useState} from "react";

import { Proposal } from "./Proposal";
import {Syllable} from "../../domain/Syllable";
import {GuessSyllable} from "../../domain/GuessSyllable";

export const PlayItem = (props: { syllableToGuess:GuessSyllable }) => {
    const { syllableToGuess } = props;
    const [isChoiceValid, setIsChoiceValid] = useState<boolean | null>(null);

    const handleProposalClick = (syllable:Syllable) => {
        setIsChoiceValid(syllable.isEquals(syllableToGuess.syllable));
    }

    const styleResultTrue = "resultPlayKana resultTrue";
    const styleResultFalse = "resultPlayKana resultFalse";

    return (
        <div>
            <div className={isChoiceValid ? styleResultTrue : styleResultFalse}>
                {isChoiceValid ? <span>yes !</span> : isChoiceValid === false ? <span>no</span> : ""}
            </div>
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
        </div>
    );
};
