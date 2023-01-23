import {Syllable} from "./Syllable";
import {randomizeSyllables} from "./randomizeSyllables";
import {GuessSyllable} from "./GuessSyllable";
import {SyllableKana} from "./SyllableKana";

const MAX_SYLLABLES_TO_PROPOZE:number = 5;

export class Practice {

    syllablesWholeSet:Array<Syllable>;
    syllablesPracticeSet:Array<Syllable>;

    constructor (syllablesWholeSet:Array<Syllable>) {
        this.syllablesWholeSet = syllablesWholeSet;
        this.syllablesPracticeSet = this.createPractice();
    }

    createPractice():Array<Syllable> {
        const syllablesWholeSetRandomized:Array<Syllable> = randomizeSyllables(this.syllablesWholeSet);

        return syllablesWholeSetRandomized.slice(0, MAX_SYLLABLES_TO_PROPOZE);
    }

    next():SyllableKana {
        const guessSyllable:GuessSyllable = new GuessSyllable(this.syllablesPracticeSet);

        const kanaToGuess:SyllableKana = new SyllableKana(
            guessSyllable.syllable.alphabet, guessSyllable.syllable.consonant, guessSyllable.syllable.vowel);

        return kanaToGuess;
    }


}
