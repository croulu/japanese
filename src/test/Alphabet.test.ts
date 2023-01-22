import {allAlphabets} from "../domain/Syllable.factory";

describe('Alphabet', function () {
    it(`should provide number of alphabets`, function () {
        const sut = allAlphabets;
        const expected = 2;

        expect(sut.length).toBe(expected)
    });

});
