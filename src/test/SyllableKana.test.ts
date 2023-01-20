import {SyllableKana} from "../domain/SyllableKana";

const kanaHiraganaKa = new SyllableKana('hiragana', 'k', 'a');

describe('SyllableKana', function () {
    it(`should display kana`, function () {
        const sut = kanaHiraganaKa.display();
        const expected = "\u304B";

        expect(sut).toBe(expected)
    });
});
