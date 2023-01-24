import React from "react";

import {Lesson} from "../../domain/Lesson";
import {Syllable} from "../../domain/Syllable";
import {PlayItem} from "./PlayItem";
import {Practice} from "../../domain/Practice";

export const PlayItemStart = (props: { lesson: Lesson, level:string }) => {
    const { lesson, level } = props;

    let syllables:Array<Syllable>;
    level === "easy" ? syllables = lesson.syllables : syllables = lesson.completeSyllablesForDifficultLesson();

    const practice:Practice = new Practice(syllables);

    const statistics:string = "x/x";

    return (
        <div className="page-block-content">{level}
            <div>
                <div>Timer</div>
                <PlayItem practice={practice} />
            </div>
        </div>
    );
};
