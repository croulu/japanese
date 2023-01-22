
export class Alphabet {
    name:string;

    constructor(name:string) {
        this.name = name;
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
