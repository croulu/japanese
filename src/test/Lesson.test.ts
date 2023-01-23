import {Lesson} from "../domain/Lesson";
import {Syllable} from "../domain/Syllable";
import {groupSyllablesInLessons} from "../domain/Syllable.factory";
import {Alphabet} from "../domain/Alphabet";

const hiragana = new Alphabet("hiragana");

const firstSyllable = new Syllable(hiragana, 'k', 'ka');
const syllables = [
    new Syllable(hiragana, 'k', 'ka'),
    new Syllable(hiragana, 'k', 'ki'),
    new Syllable(hiragana, 'k', 'ku'),
    new Syllable(hiragana, 'k', 'ke'),
    new Syllable(hiragana, 'k', 'ko'),
];

const lesson:Lesson = new Lesson(syllables, 'ka ki ku ke ko', 1);

const lessons:Array<Lesson> = groupSyllablesInLessons(hiragana);

describe('Lesson', function () {

    it(`should provide lesson with id`, function () {
        const sut = lesson.id;
        const expected = 'kakikukeko';

        expect(sut).toBe(expected)
    });

    it(`should provide first syllable of lessons`, function () {
        const sut = lesson.extractFirstSyllable();
        const expected = firstSyllable;

        expect(sut).toStrictEqual(expected)
    });

});
