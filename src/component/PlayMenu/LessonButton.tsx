import React from "react";

import {Lesson} from "../../domain/Lesson";

export const LessonButton = (props: { lesson: Lesson }) => {
    const { lesson } = props;
    const firstSyllableKanaPerLesson = lesson.extractFirstSyllableKana();
    return (
        <div>
            <div className="kanaToPlay">
                {firstSyllableKanaPerLesson.display()}
            </div>
            <div className="labelForKanaToPlay">{lesson.title}</div>
        </div>
    );
};
