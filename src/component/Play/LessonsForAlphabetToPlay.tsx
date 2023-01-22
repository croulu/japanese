import React from "react";

import {Lesson} from "../../domain/Lesson";
import {Alphabet} from "../../domain/Alphabet";
import {LessonButton} from "./LessonButton";
import {Syllable} from "../../domain/Syllable";

export const LessonsForAlphabetToPlay = (props: {  alphabet: Alphabet }) => {
    const { alphabet } = props;
    let lessons:Array<Lesson> = [];
    lessons = [
        new Lesson([
            new Syllable(alphabet, '', 'a'),
            new Syllable(alphabet, '', 'i'),
            new Syllable(alphabet, '', 'u'),
            new Syllable(alphabet, '', 'e'),
            new Syllable(alphabet, '', 'o'),
        ], 'a i u e o', 1),
        new Lesson([
            new Syllable(alphabet, 'k', 'a'),
            new Syllable(alphabet, 'k', 'i'),
            new Syllable(alphabet, 'k', 'u'),
            new Syllable(alphabet, 'k', 'e'),
            new Syllable(alphabet, 'k', 'o'),
        ], 'ka ki ku ke ko', 2),
    ];

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
