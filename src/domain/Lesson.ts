import {Syllable} from "./Syllable";
import {Alphabet} from "./Alphabet";
import {SyllableKana} from "./SyllableKana";
import {groupSyllablesInLessons} from "./Syllable.factory";

export class Lesson {
    id: string;
    alphabet:Alphabet;
    syllables:Array<Syllable>;
    title:string;
    order: number;

    constructor(syllables:Syllable[], title:string, order:number) {
        this.syllables = syllables;
        this.title = title;
        this.order = order;
        this.id = this.calculateId();
        this.alphabet = syllables[0].alphabet;
        // TODO alphabet à calculer pour toutes les syllables de la leçon au lieu de prendre le premier arbitrairement,
        // ici toutes les syllables de la leçon sont du même alphabet
    }

    calculateId ():string {
        return this.id = this.title.split(" ").join("");
    }

    extractFirstSyllable():Syllable {
        return new Syllable(this.syllables[0].alphabet, this.syllables[0].consonant, this.syllables[0].vowel);
    }

    extractFirstSyllableKana():SyllableKana {
        const syllableExtracted:Syllable = this.extractFirstSyllable();
        return new SyllableKana(syllableExtracted.alphabet, syllableExtracted.consonant, syllableExtracted.vowel);
    }

    completeSyllablesForDifficultLesson():Array<Syllable> {
        let syllablesDifficult:Array<Syllable> = [];
        let lessonsIncludedInThisDifficult:Array<Lesson>;

        const lessons:Array<Lesson> = groupSyllablesInLessons(this.alphabet);

        lessonsIncludedInThisDifficult = lessons.filter(lesson => lesson.order <= this.order);
        lessonsIncludedInThisDifficult.forEach(lesson =>
            lesson.syllables.forEach(syllable => syllablesDifficult.push(syllable))
        );

        return syllablesDifficult;
    }

    // TODO niveau très difficile ou la réponse n'est pas dans les propositions
}
