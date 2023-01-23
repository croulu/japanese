import React from "react";

import {Alphabet} from "../../domain/Alphabet";
import {groupSyllablesInLessons} from "../../domain/Syllable.factory";
import {Lesson} from "../../domain/Lesson";
import {LessonToLearn} from "./LessonToLearn";

export const LessonsToLearn = (props: { alphabet: Alphabet }) => {
    const { alphabet } = props;
    let lessons:Array<Lesson> = groupSyllablesInLessons(alphabet);

    return (
        <div className="alphabetMenu">
            {
                lessons.map((lesson) =>
                    <LessonToLearn
                        key={"learn_"+alphabet.name+"_"+lesson.id}
                        lesson={lesson} />
                )
            }
        </div>
    );
};
