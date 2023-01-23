import React from "react";

import {LessonsToLearn} from "./LessonsToLearn";
import {Alphabet} from "../../domain/Alphabet";

export const AlphabetsToLearn = (props: { alphabets: Array<Alphabet> }) => {
    const { alphabets } = props;
    return (
        <div className="alphabetsMenu">
            {
                alphabets.map((alphabet) =>
                    <LessonsToLearn
                        key={"learn_"+alphabet.name}
                        alphabet={alphabet} />
                )}
        </div>
    );
};
