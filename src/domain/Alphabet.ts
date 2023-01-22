import {Lesson} from "./Lesson";
import {Syllable} from "./Syllable";

export class Alphabet {
    name:string;
    lessons:Array<Lesson>;

    constructor(name:string) {
        this.name = name;
        this.lessons = [
            new Lesson([
                new Syllable(this, '', 'a'),
                new Syllable(this, '', 'i'),
                new Syllable(this, '', 'u'),
                new Syllable(this, '', 'e'),
                new Syllable(this, '', 'o'),
            ], 'a i u e o', 1),
            new Lesson([
                new Syllable(this, 'k', 'a'),
                new Syllable(this, 'k', 'i'),
                new Syllable(this, 'k', 'u'),
                new Syllable(this, 'k', 'e'),
                new Syllable(this, 'k', 'o'),
            ], 'ka ki ku ke ko', 2),
            new Lesson([
                new Syllable(this, 's', 'a'),
                new Syllable(this, 's', 'i'),
                new Syllable(this, 's', 'u'),
                new Syllable(this, 's', 'e'),
                new Syllable(this, 's', 'o'),
            ], 'sa shi su se so', 3),
            new Lesson([
                new Syllable(this, 't', 'a'),
                new Syllable(this, 't', 'i'),
                new Syllable(this, 't', 'u'),
                new Syllable(this, 't', 'e'),
                new Syllable(this, 't', 'o'),
            ], 'ta chi tsu te to', 4),
        ];
    }

}

/*
const lessons:Array<Lesson> = groupSyllablesInLessons();
let kanas:Array<string> = [];
let romajis:Array<string> = [];

lessons.forEach(lesson =>
    lesson.syllables.forEach(
        syllable => {
            //console.log(syllable.alphabet);
            const syllableKana = new SyllableKana(syllable.alphabet, syllable.consonant, syllable.vowel)
            const syllableRomaji = new SyllableRomaji(syllable.alphabet, syllable.consonant, syllable.vowel)
            kanas.push(syllableKana.display());
            romajis.push(syllableRomaji.display());
        }));
        */
