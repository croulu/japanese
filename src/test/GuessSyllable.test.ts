import {GuessSyllable} from "../domain/GuessSyllable";
import {Syllable} from "../domain/Syllable";
import {Alphabet} from "../domain/Alphabet";

const hiragana:Alphabet = new Alphabet("hiragana");

const syllables = [
    new Syllable(hiragana, '', 'a'),
    new Syllable(hiragana, '', 'i'),
    new Syllable(hiragana, '', 'u'),
    new Syllable(hiragana, '', 'e'),
    new Syllable(hiragana, '', 'o'),
];

const syllableToGuess = new Syllable(hiragana, '', 'i');
const kanaDisplay:string = "\u3044";
const romajiDisplay:string = "i";

const levelTest:string = "très difficile";

describe('GuessSyllable', function () {

    it(`should provide one syllable to guess`, function () {
        const sut = new GuessSyllable(syllables, levelTest);
        const actual = sut.syllable;

        expect(actual).toBeInstanceOf(Syllable);
    });

    it('should display kana', function () {
        let sut = new GuessSyllable(syllables, levelTest);
        sut.syllable = syllableToGuess;
        sut.isKanaToGuess = true;
        const actual = sut.useDisplay();

        expect(actual).toBe(kanaDisplay);
    });

    it('should display romaji', function () {
        let sut = new GuessSyllable(syllables, levelTest);
        sut.syllable = syllableToGuess;
        sut.isKanaToGuess = false;
        const actual = sut.useDisplay();

        expect(actual).toBe(romajiDisplay);
    });

    it('should create proposals for level -très difficile-', function () {
        let sut = new GuessSyllable(syllables, levelTest);

        expect(sut.proposals.length).toBe(3);
    });

    it('should create proposals excluded for level -très difficile-', function () {
        let sut = new GuessSyllable(syllables, levelTest);

        expect(sut.proposalsExcluded.length).toBe(2);
    });

    it.skip('should be completely different : proposals et proposals excluded for level -très difficile-', function () {
        let sut = new GuessSyllable(syllables, levelTest);

        expect(sut.proposalsExcluded.length).toBe(2);
    });

});
