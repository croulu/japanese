import {Syllable} from "../domain/Syllable";


const syllable = new Syllable('hiragana', 'k', 'a');

describe('Syllable', function () {
    it(`should confirm that 2 syllables are the same`, function () {
        const sut = new Syllable('hiragana', 'k', 'a');
        const expected = syllable;

        expect(sut).toStrictEqual(expected)
    });
});
