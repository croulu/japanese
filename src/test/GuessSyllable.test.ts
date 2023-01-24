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

describe('GuessSyllable', function () {

    it(`should provide one syllable to guess`, function () {
        const sut = new GuessSyllable(syllables);
        const actual = sut.syllable;

        expect(actual).toBeInstanceOf(Syllable);
    });

    it('should display kana', function () {
        let sut = new GuessSyllable(syllables);
        sut.syllable = syllableToGuess;
        sut.isKanaToGuess = true;
        const actual = sut.useDisplay();

        expect(actual).toBe(kanaDisplay);
    });

    it('should display romaji', function () {
        let sut = new GuessSyllable(syllables);
        sut.syllable = syllableToGuess;
        sut.isKanaToGuess = false;
        const actual = sut.useDisplay();

        expect(actual).toBe(romajiDisplay);
    });

});
