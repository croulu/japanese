import {Syllable} from "./Syllable";
import {randomizeSyllable} from "./randomizeSyllable";
import {randomizeWhatToGuess} from "./randomizeWhatToGuess";
import {SyllableKana} from "./SyllableKana";
import {SyllableRomaji} from "./SyllableRomaji";

const SYLLABLES_TO_KEEP_VERY_HARD_LESSON = 3;
const SYLLABLES_TO_EXCLUDE_VERY_HARD_LESSON = 2;

export class GuessSyllable {

    syllable:Syllable;
    level:string;
    syllables:Array<Syllable>;
    isKanaToGuess:boolean;
    proposals:Array<Syllable> = [];
    proposalsExcluded:Array<Syllable> = [];

    // TODO level très difficile
    // + ajouter le level
    // + ajouter les proposals : list of syllables MOINS DEUX syllables (5 à 3 ou 3 à 1)
    // + ajouter une fausse syllable à proposals ?
    // + dans le composant playItem donner à Proposal le nouvel array
    // dans le composant proposal ajouter le bouton "aucun des choix ci-dessus"
    // + ajouter le menu
    // savoir si la bonne réponse est l'autre réponse (syllable ?)

    constructor (syllables:Array<Syllable>, level:string) {
        this.syllable = randomizeSyllable(syllables);
        this.level = level;
        this.syllables = syllables;
        this.isKanaToGuess = hasKanaToGuess();
        this.levelVeryHardOrNotVeryHard();
    }

    levelVeryHardOrNotVeryHard():void {
        if (this.level === "facile" || this.level === "difficile") {
            this.proposals = this.syllables;
            this.proposalsExcluded = this.syllables;
        } else {
            this.proposals = this.syllables.slice(-SYLLABLES_TO_KEEP_VERY_HARD_LESSON);
            this.proposalsExcluded = this.syllables.slice(0, SYLLABLES_TO_EXCLUDE_VERY_HARD_LESSON);
        }
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
