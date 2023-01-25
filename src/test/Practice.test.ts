import {Practice} from "../domain/Practice";
import {Syllable} from "../domain/Syllable";
import {Alphabet} from "../domain/Alphabet";
import {GuessSyllable} from "../domain/GuessSyllable";

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

const levelTest:string = "facile";

describe('Practice', function () {

    it(`should provide a syllable set to practice for big set practice`, function () {
        const sut = new Practice(syllables, levelTest);
        const actual = sut.syllablesOneSet.length;
        const expected = 5;

        expect(actual).toBeLessThanOrEqual(expected)
    });

    it(`should provide a syllable set to practice for short set practice`, function () {
        const sut = new Practice(syllablesShort, levelTest);
        const actual = sut.syllablesOneSet.length;
        const expected = 3;

        expect(actual).toBe(expected)
    });

    it(`should provide next syllable to guess`, function () {
        const sut = new Practice(syllables, levelTest);
        const actual = sut.next();

        expect(actual).toBeInstanceOf(GuessSyllable);
    });

    it(`should provide +1 for success`, function () {
        const sut = new Practice(syllables, levelTest);
        sut.success = 0;
        const actual = sut.saveSuccess();

        expect(actual).toBe(1);
    });

    it(`should provide +1 for total play`, function () {
        const sut = new Practice(syllables, levelTest);
        sut.totalPlay = 0;
        const actual = sut.saveTotalPlay();

        expect(actual).toBe(1);
    });

});
