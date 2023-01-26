import React from "react";
import {GuessSyllable} from "../../domain/GuessSyllable";

export const ProposalNoneOfAbove = (props: { syllableToGuess:GuessSyllable, handleClick:(syllable: GuessSyllable)=>void }) => {
    const { syllableToGuess, handleClick } = props;

    const displayProposal:string = "aucun !";

    return (
        <div className="playKanaChoiceItemNone">
            <div> <button className="resetButton" onClick={() => handleClick(syllableToGuess)}>
                {displayProposal}
            </button></div>
        </div>
    );
};
