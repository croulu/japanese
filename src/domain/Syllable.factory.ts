import {Syllable} from "./Syllable";
import {Lesson} from "./Lesson";

export const withId = (lesson:Lesson) => ({...lesson, id: lesson.title.split(" ").join("")});

export function groupLessonsInCatalog():Array<Lesson> {
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
            new Syllable('hiragana', 'k', 'a'),
            new Syllable('hiragana', 'k', 'i'),
            new Syllable('hiragana', 'k', 'u'),
            new Syllable('hiragana', 'k', 'e'),
            new Syllable('hiragana', 'k', 'o'),
        ], 'ka ki ku ke ko', 2)),
        withId(new Lesson([
            new Syllable('hiragana', 's', 'a'),
            new Syllable('hiragana', 's', 'i'),
            new Syllable('hiragana', 's', 'u'),
            new Syllable('hiragana', 's', 'e'),
            new Syllable('hiragana', 's', 'o'),
        ], 'ka ki ku ke ko', 3)),
    ];

    return lessons;
}

const syllableFactory = new Map();
syllableFactory.set("HKA", new Syllable('hiragana', '', 'a'));

const romajiFactory = new Map();
syllableFactory.set("HKA", "ka");

const unicodeFactory = new Map();
syllableFactory.set("HKA", "\u304B");

/*
function findRomajiWithSyllable(syllableToFind:Syllable):string {
    const mappingSyllableRomajiUnicode = romajiFactory.get("HKA");
    const found = mappingSyllableRomajiUnicode.find(element =>
        element.syllable.alphabet === syllableToFind.alphabet &&
        element.syllable.consonant === syllableToFind.consonant &&
        element.syllable.vowel === syllableToFind.vowel);

    return found.romaji;
}

function findUnicodeWithSyllable(syllableToFind:Syllable):string {
    const mappingSyllableRomajiUnicode = unicodeFactory.get("HKA");
    const found = mappingSyllableRomajiUnicode.find(element =>
        element.syllable.alphabet === syllableToFind.alphabet &&
        element.syllable.consonant === syllableToFind.consonant &&
        element.syllable.vowel === syllableToFind.vowel);

    return found.unicode;
}
*/
