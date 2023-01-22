import {SyllableRomaji} from "../domain/SyllableRomaji";
import {Alphabet} from "../domain/Alphabet";

const hiragana = new Alphabet("hiragana");
const romajiHiraganaKa = new SyllableRomaji(hiragana, 'k', 'a');

describe('SyllableRomaji', function () {
    it(`should display romaji`, function () {
        const sut = romajiHiraganaKa.display();
        const expected = "ka";

        expect(sut).toBe(expected)
    });
});
