import {SyllableKana} from "../domain/SyllableKana";
import {Alphabet} from "../domain/Alphabet";
import {Syllable} from "../domain/Syllable";
import {Lesson} from "../domain/Lesson";

const hiragana = new Alphabet("hiragana");
const kanaHiraganaKa = new SyllableKana(hiragana, 'k', 'a');
const kanaHiraganaKu = new SyllableKana(hiragana, 'k', 'u');

const syllables = [
    new Syllable(hiragana, 'k', 'ka'),
    new Syllable(hiragana, 'k', 'ki'),
    new Syllable(hiragana, 'k', 'ku'),
    new Syllable(hiragana, 'k', 'ke'),
    new Syllable(hiragana, 'k', 'ko'),
];

const lesson:Lesson = new Lesson(syllables, 'ka ki ku ke ko', 1);

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
