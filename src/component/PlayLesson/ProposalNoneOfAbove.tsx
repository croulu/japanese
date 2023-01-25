import React from "react";
import {GuessSyllable} from "../../domain/GuessSyllable";

export const ProposalNoneOfAbove = (props: { syllableToGuess:GuessSyllable, handleClick:(syllable: GuessSyllable)=>void }) => {
    const { syllableToGuess, handleClick } = props;

    const displayProposal:string = "Aucun !";

    return (
        <div className="playKanaChoiceItem">
            <div> <a onClick={() => handleClick(syllableToGuess)}>
                {displayProposal}
            </a></div>
        </div>
    );
};
