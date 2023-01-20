import React from "react";

import {Lesson} from "../../domain/Lesson";
import {LessonButton} from "./LessonButton";

export const LessonComponent = (props: { lessons: Array<Lesson> }) => {
    const { lessons } = props;
    return (
        <ul>
            {
                lessons.map((lesson) =>
                    <div>{lesson.title} : <LessonButton
                        key={"bbb"}
                        lesson={lesson} /></div>
                    )}
        </ul>
    );
};
