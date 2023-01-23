import React from "react";

import {Alphabet} from "../../domain/Alphabet";
import {SyllablePicture} from "./SyllablePicture";
import {groupSyllablesInAlphabets} from "../../domain/Syllable.factory";

export const SyllablesToLearn = (props: { alphabet: Alphabet }) => {
    const { alphabet } = props;
    const syllables = groupSyllablesInAlphabets(alphabet);
    return (
        <div className="alphabetMenu">
            {
                syllables.map((syllable) =>
                    <SyllablePicture
                        key={syllable.id}
                        syllable={syllable} />
                )
            }
        </div>
    );
};
