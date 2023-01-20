import {SyllableRomaji} from "../domain/SyllableRomaji";

const romajiHiraganaKa = new SyllableRomaji('hiragana', 'k', 'a');

describe('SyllableRomaji', function () {
    it(`should display romaji`, function () {
        const sut = romajiHiraganaKa.display();
        const expected = "ka";

        expect(sut).toBe(expected)
    });
});
