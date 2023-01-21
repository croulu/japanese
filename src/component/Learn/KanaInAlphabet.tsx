import React from "react";

import {Lesson} from "../../domain/Lesson";
import {SyllableComponent} from "../Play/SyllableComponent";

export const KanaInAlphabet = (props: { lesson: Lesson }) => {
    const { lesson } = props;
    const syllables = lesson.syllables;
    return (
        <div>
            {
                syllables.map((syllable) =>
                    <SyllableComponent
                        key={"ccc"}
                        syllable={syllable} />
                )
            }
        </div>
    );
};
