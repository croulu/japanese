import {Syllable} from "../domain/Syllable";
import {Alphabet} from "../domain/Alphabet";

const hiragana = new Alphabet("hiragana");
const syllable = new Syllable(hiragana, 'k', 'a');

describe('Syllable', function () {
    it(`should confirm that 2 syllables are the same`, function () {
        const sut = new Syllable(hiragana, 'k', 'a');

        expect(sut).toStrictEqual(syllable)
    });
});
