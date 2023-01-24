import {Syllable} from "./Syllable";
import {randomizeSyllable} from "./randomizeSyllable";
import {randomizeWhatToGuess} from "./randomizeWhatToGuess";
import {SyllableKana} from "./SyllableKana";
import {SyllableRomaji} from "./SyllableRomaji";

export class GuessSyllable {

    syllable:Syllable;
    syllables:Array<Syllable>;
    isKanaToGuess:boolean;

    constructor (syllables:Array<Syllable>) {
        this.syllable = randomizeSyllable(syllables);
        this.syllables = syllables;
        this.isKanaToGuess = hasKanaToGuess();

    }

    useDisplay():string {
        if (this.isKanaToGuess) {
            const kanaSyllable = new SyllableKana(this.syllable.alphabet, this.syllable.consonant, this.syllable.vowel);
            return kanaSyllable.display();
        } else {
            const romajiSyllable = new SyllableRomaji(this.syllable.alphabet, this.syllable.consonant, this.syllable.vowel);
            return romajiSyllable.display();
        }
    }

}

function hasKanaToGuess() {
    const guessWhat = randomizeWhatToGuess();
    return guessWhat === "kana";
}
