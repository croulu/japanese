import {SyllableKana} from "../domain/SyllableKana";

const unicodeHiraganaKa:string = "\u304B";
const kanaHiraganaKa = new SyllableKana('hiragana', 'k', 'a');

describe('SyllableKana', function () {
    it(`should display kana`, function () {
        const sut = kanaHiraganaKa;
        const actual = sut.display();
        const expected = unicodeHiraganaKa;

        expect(actual).toBe(expected)
    });
});
