import {SyllableKana} from "../domain/SyllableKana";
import {Alphabet} from "../domain/Alphabet";

const hiragana = new Alphabet("hiragana");
const kanaHiraganaKa = new SyllableKana(hiragana, 'k', 'a');
const kanaHiraganaKu = new SyllableKana(hiragana, 'k', 'u');

// TODO tester tous les cas particuliers
// TODO aujouter un test sur les romajis identhiques (cas de "ji")

describe('SyllableKana', function () {
    it(`should display kana`, function () {
        const sut = kanaHiraganaKa.display();
        const expected = "\u304B";

        expect(sut).toBe(expected)
    });

    it(`should find kana with syllable id`, function () {
        const sut = kanaHiraganaKu.findWithSyllableId();
        const expected = "\u304F";

        expect(sut).toBe(expected)
    });

});
