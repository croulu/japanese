import React from "react";

import {Alphabet} from "../../domain/Alphabet";
import {LessonsToPlay} from "./LessonsToPlay";
import {Lesson} from "../../domain/Lesson";

export const AlphabetsToPlay = (props: {  alphabets: Array<Alphabet>, level:string, onLessonChange:(lesson:Lesson)=>void  }) => {
    const { alphabets, level, onLessonChange } = props;

    return (
        <div className="page-block-content mt mb">{level}
            {
            alphabets.map((alphabet) =>
                <LessonsToPlay
                    key={alphabet.name}
                    alphabet={alphabet}
                    onLessonChange={onLessonChange}
                />

            )
            }
        </div>
    );
};
