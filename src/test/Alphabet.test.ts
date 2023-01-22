import {alphabets, syllablesInAlphabet} from "../domain/Syllable.factory";

describe('Alphabet', function () {
    it(`should provide number of alphabets`, function () {
        const sut = alphabets;
        const expected = 2;

        expect(sut.length).toBe(expected)
    });

    it(`should provide number of syllables in one alphabet`, function () {
        const sut = syllablesInAlphabet;
        const expected = 46;

        expect(sut).toBe(expected)
    });

});
