import React from "react";

import {Lesson} from "../../domain/Lesson";
import {SyllableKana} from "../../domain/SyllableKana";
import {SyllableComponent} from "./SyllableComponent";

export const LessonButton = (props: { lesson: Lesson }) => {
    const { lesson } = props;
    const oneKanaPerLesson = new SyllableKana(lesson.syllables[0].alphabet, lesson.syllables[0].consonant, lesson.syllables[0].vowel)
    const syllables = lesson.syllables;
    return (
        <>{oneKanaPerLesson.display()}
            {
                syllables.map((syllable) =>
                    <div> <SyllableComponent
                        key={"ccc"}
                        syllable={syllable} /></div>
                )
            }
        </>
    );
};
