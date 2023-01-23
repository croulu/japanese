import {Syllable} from "./Syllable";

const MAX_SYLLABLES_TO_PROPOZE:number = 5;

export class Practice {

    syllablesWholeSet:Array<Syllable>;
    syllablesPracticeSet:Array<Syllable>;

    constructor (syllablesWholeSet:Array<Syllable>) {
        this.syllablesWholeSet = syllablesWholeSet;
        this.syllablesPracticeSet = this.createPractice();
    }

    createPractice():Array<Syllable> {
        const syllables:Array<Syllable> = this.syllablesWholeSet.slice(0, MAX_SYLLABLES_TO_PROPOZE);
        console.log(syllables);
        return syllables;
    }




}
