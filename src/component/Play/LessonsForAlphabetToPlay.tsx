import React from "react";

import {Lesson} from "../../domain/Lesson";
import {Alphabet} from "../../domain/Alphabet";
import {LessonButton} from "./LessonButton";
import {groupSyllablesInLessons} from "../../domain/Syllable.factory";

export const LessonsForAlphabetToPlay = (props: {  alphabet: Alphabet }) => {
    const { alphabet } = props;
    let lessons:Array<Lesson> = groupSyllablesInLessons(alphabet);

    return (
        <>{alphabet.name}
            <div className="playMenu">
                {
                    lessons.map((lesson) =>
                        <LessonButton
                            key={alphabet.name + lesson.id}
                            lesson={lesson} />

                    )
                }
            </div>
        </>
    );
};
