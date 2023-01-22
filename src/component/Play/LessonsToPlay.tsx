import React from "react";

import {Lesson} from "../../domain/Lesson";
import {LessonButton} from "./LessonButton";
import {Syllable} from "../../domain/Syllable";

export const LessonsToPlay = (props: { lessons: Array<Lesson> }) => {
    const { lessons } = props;
    const syllables:Syllable[] = lessons[0].syllables;
    const alphabet:string = syllables[0].alphabet;
    return (
        <>{alphabet}
            <div className="playMenu">
                {
                    lessons.map((lesson) =>
                        <LessonButton
                            key={"bbb"}
                            lesson={lesson} />

                        )
                }
            </div>
        </>
    );
};
