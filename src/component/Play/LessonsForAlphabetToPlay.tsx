import React from "react";

import {Lesson} from "../../domain/Lesson";
import {Alphabet} from "../../domain/Alphabet";
import {LessonButton} from "./LessonButton";
import {Syllable} from "../../domain/Syllable";

export const LessonsForAlphabetToPlay = (props: {  alphabet: Alphabet }) => {
    const { alphabet } = props;
    let lessons:Array<Lesson> = alphabet.lessons;

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
