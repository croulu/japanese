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

describe('GuessSyllable', function () {

    it(`should provide one syllable to guess`, function () {
        const sut = new GuessSyllable(syllables);
        const actual = sut.syllable;

        expect(actual).toBeInstanceOf(Syllable)
    });


});
