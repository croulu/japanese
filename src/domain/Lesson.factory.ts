import {Syllable} from "./Syllable";
import {Lesson} from "./Lesson";

export const withId = (lesson:Lesson) => ({...lesson, id: lesson.title.split(" ").join("")});

export function lessonFactory():Array<Lesson> {
    let lessons:Array<Lesson> = [];

    lessons = [
        withId(new Lesson([
            new Syllable('hiragana', '', 'a'),
            new Syllable('hiragana', '', 'i'),
            new Syllable('hiragana', '', 'u'),
            new Syllable('hiragana', '', 'e'),
            new Syllable('hiragana', '', 'o'),
        ], 'a i u e o', 1)),
        withId(new Lesson([
            new Syllable('hiragana', 'k', 'ka'),
            new Syllable('hiragana', 'k', 'ki'),
            new Syllable('hiragana', 'k', 'ku'),
            new Syllable('hiragana', 'k', 'ke'),
            new Syllable('hiragana', 'k', 'ko'),
        ], 'ka ki ku ke ko', 2)),
        withId(new Lesson([
            new Syllable('hiragana', 's', 'sa'),
            new Syllable('hiragana', 's', 'shi'),
            new Syllable('hiragana', 's', 'su'),
            new Syllable('hiragana', 's', 'se'),
            new Syllable('hiragana', 's', 'so'),
        ], 'ka ki ku ke ko', 3)),
    ];

    return lessons;
}
