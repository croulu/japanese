import React from "react";

import {Lesson} from "../../domain/Lesson";
import {useNavigate} from "react-router-dom";

export const LessonButton = (props: { lesson: Lesson, onLessonChange:(lesson:Lesson)=>void }) => {
    const { lesson, onLessonChange } = props;

    const firstSyllableKanaPerLesson = lesson.extractFirstSyllableKana();

    const navigate = useNavigate();

    const handleClick = function () {
        onLessonChange(lesson);

        navigate('/play');
    }

    return (
        <div><center>
            <button className="resetButton" onClick={handleClick}>
                <div className="kanaToPlay">
                    {firstSyllableKanaPerLesson.display()}
                </div>
                <div className="labelForKanaToPlay">{lesson.title}</div>
            </button>
        </center>
        </div>
    );
};
