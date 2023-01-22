import {SyllableRomaji} from "../domain/SyllableRomaji";
import {Alphabet} from "../domain/Alphabet";

const hiragana = new Alphabet("hiragana");
const romajiHiraganaKa = new SyllableRomaji(hiragana, 'k', 'a');
const romajiHiraganaKo = new SyllableRomaji(hiragana, 'k', 'o');

describe('SyllableRomaji', function () {
    it(`should display romaji`, function () {
        const sut = romajiHiraganaKa.display();
        const expected = "ka";

        expect(sut).toBe(expected)
    });

    it(`should find romaji with syllable id`, function () {
        const sut = romajiHiraganaKo.findWithSyllableId();
        const expected = "ko";

        expect(sut).toBe(expected)
    });

});
