import {Syllable} from "../domain/Syllable";
import {Alphabet} from "../domain/Alphabet";
import {SyllableKana} from "../domain/SyllableKana";
import {GuessKana} from "../domain/GuessKana";

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

describe('GuessKana', function () {

    it(`should provide one kana to guess`, function () {
        const sut = new GuessKana(syllables);
        const actual = sut.kana;

        expect(actual).toBeInstanceOf(SyllableKana);
    });



});
