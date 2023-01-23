import React from "react";

import {Alphabet} from "../../domain/Alphabet";
import {LessonsToPlay} from "./LessonsToPlay";

export const AlphabetsToPlay = (props: {  alphabets: Array<Alphabet> }) => {
    const { alphabets } = props;

    const level:string = "difficile";

    return (
        <div className="page-block-content mt mb">{level}
            {
            alphabets.map((alphabet) =>
                <LessonsToPlay
                    key={alphabet.name}
                    alphabet={alphabet} />

            )
            }
        </div>
    );
};
