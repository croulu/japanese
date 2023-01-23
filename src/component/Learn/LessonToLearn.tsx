import React from "react";

import {SyllablePicture} from "./SyllablePicture";
import {Lesson} from "../../domain/Lesson";
import {Syllable} from "../../domain/Syllable";

export const LessonToLearn = (props: { lesson: Lesson }) => {
    const { lesson } = props;
    const alphabet:string = lesson.alphabet.name;
    let syllables:Array<Syllable> = lesson.syllables;

    let styleForLesson:string = "";
    if (syllables.length === 5) {
        styleForLesson = "alphabetLessonMenu";
    }
    else if (syllables.length === 3) {
        styleForLesson = "alphabetLessonShort3Menu";
    }
    else if (syllables.length === 2) {
        styleForLesson = "alphabetLessonShort2Menu";
    }
    else if (syllables.length === 1) {
        styleForLesson = "alphabetLessonShort1Menu";
    }

    return (
        <div className={styleForLesson}>
            {
                syllables.map((syllable) =>
                    <SyllablePicture
                        key={"learn_"+alphabet+"_"+lesson.id+"_"+syllable.id}
                        syllable={syllable} />
                )
            }
        </div>
    );
};
