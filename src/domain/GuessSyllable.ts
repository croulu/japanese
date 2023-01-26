import {Syllable} from "./Syllable";
import {randomizeSyllable} from "./randomizeSyllable";
import {randomizeWhatToGuess} from "./randomizeWhatToGuess";
import {SyllableKana} from "./SyllableKana";
import {SyllableRomaji} from "./SyllableRomaji";
import {LEVEL_DIFFICULT, LEVEL_EASY} from "./Syllable.factory";

const SYLLABLES_TO_KEEP_VERY_HARD_LESSON = 2;
const SYLLABLES_TO_EXCLUDE_VERY_HARD_LESSON = 3;

export class GuessSyllable {

    syllable:Syllable;
    level:string;
    syllables:Array<Syllable>;
    isKanaToGuess:boolean;
    proposals:Array<Syllable> = [];
    proposalsExcluded:Array<Syllable> = [];

    constructor (syllables:Array<Syllable>, level:string) {
        this.syllable = randomizeSyllable(syllables);
        this.level = level;
        this.syllables = syllables;
        this.isKanaToGuess = hasKanaToGuess();
        this.levelVeryHardOrNotVeryHard();
    }

    levelVeryHardOrNotVeryHard():void {
        if (this.level === LEVEL_EASY || this.level === LEVEL_DIFFICULT) {
            this.proposals = this.syllables;
            this.proposalsExcluded = this.syllables;
        } else {
            this.proposals = this.syllables.slice(-SYLLABLES_TO_KEEP_VERY_HARD_LESSON);
            this.proposalsExcluded = this.syllables.slice(0, SYLLABLES_TO_EXCLUDE_VERY_HARD_LESSON);
        }
    }

    isGoodAnswerExcluded():boolean {
        let isExcluded:boolean = false;

        this.proposalsExcluded.forEach(syllableExcluded => {
            if (syllableExcluded.isEquals(this.syllable)) isExcluded = true;
        });

        return isExcluded;
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
