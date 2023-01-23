import {Practice} from "../domain/Practice";
import {Syllable} from "../domain/Syllable";
import {Alphabet} from "../domain/Alphabet";

const hiragana:Alphabet = new Alphabet("hiragana");
const syllables = [
    new Syllable(hiragana, '', 'a'),
    new Syllable(hiragana, '', 'i'),
    new Syllable(hiragana, '', 'u'),
    new Syllable(hiragana, '', 'e'),
    new Syllable(hiragana, '', 'o'),
    new Syllable(hiragana, 'k', 'ka'),
    new Syllable(hiragana, 'k', 'ki'),
    new Syllable(hiragana, 'k', 'ku'),
    new Syllable(hiragana, 'k', 'ke'),
    new Syllable(hiragana, 'k', 'ko'),
    new Syllable(hiragana, 's', 'sa'),
    new Syllable(hiragana, 's', 'shi'),
    new Syllable(hiragana, 's', 'su'),
    new Syllable(hiragana, 's', 'se'),
    new Syllable(hiragana, 's', 'so'),
];

const practice:Practice = new Practice(syllables);

describe('Practice', function () {

    it(`should provide a syllable set to practice`, function () {
        const sut = practice.syllablesPracticeSet.length;
        const expected = 5;

        expect(sut).toBeLessThanOrEqual(expected)
    });
});
