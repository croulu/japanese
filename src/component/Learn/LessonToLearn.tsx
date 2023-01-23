import React from "react";

import {SyllablePicture} from "./SyllablePicture";
import {Lesson} from "../../domain/Lesson";
import {Syllable} from "../../domain/Syllable";

export const LessonToLearn = (props: { lesson: Lesson }) => {
    const { lesson } = props;
    const alphabet:string = lesson.alphabet.name;
    let syllables:Array<Syllable> = lesson.syllables;

    return (
        <div className="alphabetLessonMenu">
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
