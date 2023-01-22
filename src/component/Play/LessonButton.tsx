import React from "react";

import {Lesson} from "../../domain/Lesson";
import {SyllableKana} from "../../domain/SyllableKana";

export const LessonButton = (props: { lesson: Lesson }) => {
    const { lesson } = props;
    const oneKanaPerLesson = new SyllableKana(lesson.syllables[0].alphabet, lesson.syllables[0].consonant, lesson.syllables[0].vowel);
    return (
        <div>
            <div className="kanaToPlay">
                {oneKanaPerLesson.display()}
            </div>
            <div className="labelForKanaToPlay">{lesson.title}</div>
        </div>
    );
};
