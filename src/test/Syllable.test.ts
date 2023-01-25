import {Syllable} from "../domain/Syllable";
import {Alphabet} from "../domain/Alphabet";

const hiragana = new Alphabet("hiragana");
const syllableToTest:Syllable = new Syllable(hiragana, 'k', 'a')

describe('Syllable', function () {
    it(`should confirm that 2 syllables are the same`, function () {
        const sut = new Syllable(hiragana, 'k', 'a');
        const actual:boolean = sut.isEquals(syllableToTest);

        expect(actual).toStrictEqual(true)
    });
});
