import React from "react";

import {Alphabet} from "../../domain/Alphabet";
import {LessonsForAlphabetToPlay} from "./LessonsForAlphabetToPlay";

export const AlphabetsToPlay = (props: {  alphabets: Array<Alphabet> }) => {
    const { alphabets } = props;

    return (
        <>
            {
            alphabets.map((alphabet) =>
                <LessonsForAlphabetToPlay
                    key={alphabet.name}
                    alphabet={alphabet} />

            )
            }
        </>
    );
};
