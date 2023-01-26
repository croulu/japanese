import React, {useState} from "react";

import { Proposal } from "./Proposal";
import {Syllable} from "../../domain/Syllable";
import {Practice} from "../../domain/Practice";
import {Statistics} from "./Statistics";
import {CountdownTimer} from "./CountdownTimer";
import {GuessSyllable} from "../../domain/GuessSyllable";
import {ProposalNoneOfAbove} from "./ProposalNoneOfAbove";
import {LEVEL_EASY, LEVEL_DIFFICULT} from "../../domain/Syllable.factory";

export const PlayItem = (props: { practice:Practice, level:string }) => {
    const { practice, level } = props;

    const [syllableToGuess, setSyllableToGuess] = useState(practice.next());
    const [isChoiceValid, setIsChoiceValid] = useState<boolean | null | undefined>(null);
    const [success, setSuccess] = useState<number | null | undefined>(0);
    const [totalPlay, setTotalPlay] = useState<number | null | undefined>(0);
    const [isCountdowntimer, setIsCountdowntimer] = useState<boolean | null | undefined>(true);
    const [informations, setInformations] = useState<string>("");

    let statistics:string = `${success} / ${totalPlay}`;

    const styleResultTrue = "resultPlayKana resultTrue";
    const styleResultFalse = "resultPlayKana resultFalse";

    const handleProposalClick = (syllable:Syllable) => {
        if (isCountdowntimer) {
            const isValid:boolean = syllable.isEquals(syllableToGuess.syllable);
            checkSoluceAndContinue(isValid);
        }
    }

    const handleProposalExcludedClick = (syllableToGuess:GuessSyllable) => {
        if (isCountdowntimer) {
            const isValid:boolean = syllableToGuess.isGoodAnswerExcluded();
            checkSoluceAndContinue(isValid);
        }
    }

    function checkSoluceAndContinue(isValid: boolean) {
        setIsChoiceValid(isValid);
        if (isValid) setSuccess(practice.saveSuccess());
        setTotalPlay(practice.saveTotalPlay())
        setTimeout(() => {
            setIsChoiceValid(undefined);
            setSyllableToGuess(practice.next());
        }, 1000);
    }

    const handleOnTimeout = () => {
        setIsCountdowntimer(false);
        setInformations("fini !");
    };

    // TODO logique métier à enlever dans le rendu du composant

    return (
        <div>
            <CountdownTimer onTimeout={handleOnTimeout}/>
            <Statistics statistics={statistics} informations={informations}/>
            <div className={isChoiceValid ? styleResultTrue : styleResultFalse}>
                {isChoiceValid ? <span>yes !</span> : isChoiceValid === false ? <span>no</span> : ""}
            </div>
            <div className="playKana">
                <div className="playItemKana">{syllableToGuess.useDisplay()}</div>
                {
                    syllableToGuess.proposals.map((syllable: Syllable) =>
                        <Proposal key={syllable.id}
                                  syllable={syllable}
                                  isKanaToGuess={syllableToGuess.isKanaToGuess}
                                  handleClick={handleProposalClick}
                                  level={level} />)
                }
                {
                    (level !== LEVEL_EASY && level !== LEVEL_DIFFICULT)
                    ? <div><ProposalNoneOfAbove
                        key="none" syllableToGuess={syllableToGuess}
                        handleClick={handleProposalExcludedClick}/></div>
                    : <div>&nbsp;</div>
                }
            </div>
        </div>
    );
};
