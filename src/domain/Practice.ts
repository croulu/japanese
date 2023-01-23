import {Syllable} from "./Syllable";
import {randomizeSyllables} from "./randomizeSyllables";
import {GuessSyllable} from "./GuessSyllable";

const MAX_SYLLABLES_TO_PROPOZE:number = 5;

export class Practice {

    syllablesWholeSet:Array<Syllable>;
    syllablesOneSet:Array<Syllable>;

    constructor (syllablesWholeSet:Array<Syllable>) {
        this.syllablesWholeSet = syllablesWholeSet;
        this.syllablesOneSet = this.createOneSet();
    }

    createOneSet():Array<Syllable> {
        const syllablesWholeSetRandomized:Array<Syllable> = randomizeSyllables(this.syllablesWholeSet);

        return syllablesWholeSetRandomized.slice(0, MAX_SYLLABLES_TO_PROPOZE);
    }

    next():GuessSyllable {
        return new GuessSyllable(this.syllablesOneSet);
    }


}
