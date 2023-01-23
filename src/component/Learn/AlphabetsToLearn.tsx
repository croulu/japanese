import React from "react";

import {SyllablesToLearn} from "./SyllablesToLearn";
import {Alphabet} from "../../domain/Alphabet";

export const AlphabetsToLearn = (props: { alphabets: Array<Alphabet> }) => {
    const { alphabets } = props;
    return (
        <div className="alphabetMenu">
            {
                alphabets.map((alphabet) =>
                    <SyllablesToLearn
                        key={"learn_"+alphabet.name}
                        alphabet={alphabet} />
                )}
        </div>
    );
};
