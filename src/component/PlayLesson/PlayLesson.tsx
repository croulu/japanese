import React from "react";

import {Lesson} from "../../domain/Lesson";
import {Syllable} from "../../domain/Syllable";
import {PlayItem} from "./PlayItem";
import {Practice} from "../../domain/Practice";
import {LEVEL_EASY} from "../../domain/Syllable.factory";

export const PlayLesson = (props: { lesson: Lesson, level:string }) => {
    const { lesson, level } = props;

    let syllables:Array<Syllable>;
    level === LEVEL_EASY ? syllables = lesson.syllables : syllables = lesson.completeSyllablesForDifficultLesson();
    // TODO pourquoi faire deux fois le test level ? (la 1ere fois dans le routing)

    const practice:Practice = new Practice(syllables, level);

    return (
        <div className="page-block-content">{level}
                <PlayItem practice={practice} level={level} />
        </div>
    );
};
