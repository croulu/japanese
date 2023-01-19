import {Syllable} from "./Syllable";

export class Lesson {
    id: string;
    syllables:Array<Syllable>;
    title:string;
    order: number;

    constructor(id:string, syllables:Syllable[], title:string, order:number) {
        this.id = id;
        this.syllables = syllables;
        this.title = title;
        this.order = order;
    }

}

const syllablesLesson1 = [
    new Syllable('hiragana', '', 'a'),
    new Syllable('hiragana', '', 'i'),
];
const lesson1 = new Lesson('aiueo', syllablesLesson1, 'a i u e o', 1);

const syllablesLesson2 = [
    new Syllable('hiragana', 'k', 'ka'),
    new Syllable('hiragana', 'k', 'ki'),
];
const lesson2 = new Lesson('kakikukeko', syllablesLesson1, 'ka ki ku ke ko', 1);

export function lessonCatalog():Array<Lesson> {
    let lessons:Array<Lesson> = [];

    lessons.push(lesson1);
    lessons.push(lesson2);

    return lessons;
}