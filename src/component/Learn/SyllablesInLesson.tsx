import React from "react";

import {Lesson} from "../../domain/Lesson";
import {SyllableInAlphabet} from "./SyllableInAlphabet";

export const SyllablesInLesson = (props: { lesson: Lesson }) => {
    const { lesson } = props;
    const syllables = lesson.syllables;
    return (
        <div>
            {
                syllables.map((syllable) =>
                    <SyllableInAlphabet
                        key={"ccc"}
                        syllable={syllable} />
                )
            }
        </div>
    );
};
