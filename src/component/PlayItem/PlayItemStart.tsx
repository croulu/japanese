import React from "react";

import {Lesson} from "../../domain/Lesson";
import {Syllable} from "../../domain/Syllable";
import {PlayItem} from "./PlayItem";

export const PlayItemStart = (props: { lesson: Lesson, level:string }) => {
    const { lesson, level } = props;

    const syllables:Array<Syllable> = lesson.syllables;

    return (
        <div className="page-block-content">{level}
            <div>
                <div>Timer</div>
                <div>Statistiques</div>
                <PlayItem syllables={syllables} />
            </div>
        </div>
    );
};
