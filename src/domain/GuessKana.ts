import {Syllable} from "./Syllable";
import {randomizeSyllable} from "./randomizeSyllable";
import {SyllableKana} from "./SyllableKana";
import {SyllableRomaji} from "./SyllableRomaji";

export class GuessKana {

    syllables:Array<Syllable>;
    syllable:Syllable;
    kana:SyllableKana;
    romajiProposedByUser:SyllableRomaji;

    constructor (syllables:Array<Syllable>) {
        this.syllables = syllables;
        this.syllable = randomizeSyllable(syllables);
        this.kana = new SyllableKana(this.syllable.alphabet, this.syllable.consonant, this.syllable.vowel);
        this.romajiProposedByUser = new SyllableRomaji(this.syllable.alphabet, this.syllable.consonant, this.syllable.vowel);
    }

}
