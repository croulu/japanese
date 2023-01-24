import React, {useState} from "react";

import { Proposal } from "./Proposal";
import {Syllable} from "../../domain/Syllable";
import {Practice} from "../../domain/Practice";
import {Statistics} from "./Statistics";

export const PlayItem = (props: { practice:Practice }) => {
    const { practice } = props;

    const [syllableToGuess, setSyllableToGuess] = useState(practice.next());
    const [isChoiceValid, setIsChoiceValid] = useState<boolean | null | undefined>(null);
    const [success, setSuccess] = useState<number | null | undefined>(0);
    const [totalPlay, setTotalPlay] = useState<number | null | undefined>(0);

    const handleProposalClick = (syllable:Syllable) => {
        const isValid:boolean = syllable.isEquals(syllableToGuess.syllable);
        setIsChoiceValid(isValid);
        if (isValid) setSuccess(practice.saveSuccess());
        setTotalPlay(practice.saveTotalPlay())
        setTimeout(() => {
            setIsChoiceValid(undefined);
            setSyllableToGuess(practice.next());
        }, 1000);
    }

    const statistics:string = `${success} / ${totalPlay}`;

    const styleResultTrue = "resultPlayKana resultTrue";
    const styleResultFalse = "resultPlayKana resultFalse";

    return (
        <div>
            <Statistics statistics={statistics}/>
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
