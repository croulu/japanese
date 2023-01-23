import React from "react";

import {Lesson} from "../../domain/Lesson";
import {Syllable} from "../../domain/Syllable";

export const PlayItemStart = (props: { lesson: Lesson, level:string }) => {
    const { lesson, level } = props;

    const syllables:Array<Syllable> = lesson.getSyllables();

    return (
        <div className="page-block-content">{level}
            <div>
                <div>Timer</div>
                <div>Statistiques</div>
                Je joue !
            </div>
        </div>
    );
};
