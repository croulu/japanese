import React from "react";

import {Lesson} from "../../domain/Lesson";
import {LessonButton} from "./LessonButton";

export const LessonComponent = (props: { lessons: Array<Lesson> }) => {
    const { lessons } = props;
    return (
        <>
            <div id="playMenu" className="page-block-content">
                {
                    lessons.map((lesson) =>
                        <div><LessonButton
                            key={"bbb"}
                            lesson={lesson} />
                        </div>
                        )
                }
            </div>
        </>
    );
};
