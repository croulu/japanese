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

const syllablesShort = [
    new Syllable(hiragana, 'w', 'a'),
    new Syllable(hiragana, 'w', 'o'),
    new Syllable(hiragana, 'n', ''),
];

describe('Practice', function () {

    it(`should provide a syllable set to practice for big set practice`, function () {
        const sut = new Practice(syllables);
        const actual = sut.syllablesPracticeSet.length;
        const expected = 5;

        expect(actual).toBeLessThanOrEqual(expected)
    });

    it(`should provide a syllable set to practice for short set practice`, function () {
        const sut = new Practice(syllablesShort);
        const actual = sut.syllablesPracticeSet.length;
        const expected = 3;

        expect(actual).toBe(expected)
    });

});
