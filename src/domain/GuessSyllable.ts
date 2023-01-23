import {Syllable} from "./Syllable";
import {randomizeSyllable} from "./randomizeSyllable";

export class GuessSyllable {

    syllable:Syllable;
    syllables:Array<Syllable>;

    constructor (syllables:Array<Syllable>) {
        this.syllable = randomizeSyllable(syllables);
        this.syllables = syllables;
    }

}
