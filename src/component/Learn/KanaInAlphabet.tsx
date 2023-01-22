import React from "react";

import {Lesson} from "../../domain/Lesson";
import {LessonToPlay} from "../Play/LessonToPlay";

export const KanaInAlphabet = (props: { lesson: Lesson }) => {
    const { lesson } = props;
    const syllables = lesson.syllables;
    return (
        <div>
            {
                syllables.map((syllable) =>
                    <LessonToPlay
                        key={"ccc"}
                        syllable={syllable} />
                )
            }
        </div>
    );
};
