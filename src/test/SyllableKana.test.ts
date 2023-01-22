import {SyllableKana} from "../domain/SyllableKana";
import {Alphabet} from "../domain/Alphabet";

const hiragana = new Alphabet("hiragana");
const kanaHiraganaKa = new SyllableKana(hiragana, 'k', 'a');

describe('SyllableKana', function () {
    it(`should display kana`, function () {
        const sut = kanaHiraganaKa.display();
        const expected = "\u304B";

        expect(sut).toBe(expected)
    });
});
