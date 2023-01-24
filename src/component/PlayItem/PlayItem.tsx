import React, {useState} from "react";

import { Proposal } from "./Proposal";
import {Syllable} from "../../domain/Syllable";
import {Practice} from "../../domain/Practice";

export const PlayItem = (props: { practice:Practice }) => {
    const { practice } = props;

    const [syllableToGuess, setSyllableToGuess] = useState(practice.next());
    const [isChoiceValid, setIsChoiceValid] = useState<boolean | null | undefined>(null);

    const handleProposalClick = (syllable:Syllable) => {
        setIsChoiceValid(syllable.isEquals(syllableToGuess.syllable));
        setTimeout(() => {
            setIsChoiceValid(undefined);
            setSyllableToGuess(practice.next());
        }, 1000);
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
