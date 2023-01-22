import React from "react";

import {Lesson} from "../../domain/Lesson";
import {SyllablesInLesson} from "./SyllablesInLesson";

export const Alphabets = (props: { lessons: Array<Lesson> }) => {
    const { lessons } = props;
    return (
        <div className="alphabetMenu">
            {
                lessons.map((lesson) =>
                    <SyllablesInLesson
                        key={"learn"+lesson.id}
                        lesson={lesson} />
                )}
        </div>
    );
};
