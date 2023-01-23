import React from "react";

import {Lesson} from "../../domain/Lesson";
import {Syllable} from "../../domain/Syllable";
import {PlayItem} from "./PlayItem";
import {Practice} from "../../domain/Practice";
import {GuessSyllable} from "../../domain/GuessSyllable";

export const PlayItemStart = (props: { lesson: Lesson, level:string }) => {
    const { lesson, level } = props;

    let syllables:Array<Syllable>;
    level === "easy" ? syllables = lesson.syllables : syllables = lesson.completeSyllablesForDifficultLesson();

    const practice:Practice = new Practice(syllables);
    const syllableToGuess:GuessSyllable = practice.next();

    return (
        <div className="page-block-content">{level}
            <div>
                <div>Timer</div>
                <div>Statistiques</div>
                <PlayItem syllableToGuess={syllableToGuess} />
            </div>
        </div>
    );
};
