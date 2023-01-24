import {Syllable} from "./Syllable";
import {randomizeSyllables} from "./randomizeSyllables";
import {GuessSyllable} from "./GuessSyllable";

const MAX_SYLLABLES_TO_PROPOZE:number = 5;

export class Practice {

    syllablesWholeSet:Array<Syllable>;
    syllablesOneSet:Array<Syllable>;

    success:number;
    totalPlay:number;

    constructor (syllablesWholeSet:Array<Syllable>) {
        this.syllablesWholeSet = syllablesWholeSet;
        this.syllablesOneSet = this.randomizeOneSet();
        this.success = 0;
        this.totalPlay = 0;
    }

    randomizeOneSet():Array<Syllable> {
        const syllablesWholeSetRandomized:Array<Syllable> = randomizeSyllables(this.syllablesWholeSet);

        return syllablesWholeSetRandomized.slice(0, MAX_SYLLABLES_TO_PROPOZE);
    }

    next():GuessSyllable {
        this.syllablesOneSet = this.randomizeOneSet();
        return new GuessSyllable(this.syllablesOneSet);
    }

    saveSuccess():number {
        this.success++;
        return this.success;
    }

    saveTotalPlay():number {
        this.totalPlay++;
        return this.totalPlay;
    }

}
