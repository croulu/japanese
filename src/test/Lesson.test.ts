import {Lesson} from "../domain/Lesson";
import {Syllable} from "../domain/Syllable";
import {groupSyllablesInLessons} from "../domain/Syllable.factory";
import {Alphabet} from "../domain/Alphabet";

const hiragana = new Alphabet("hiragana");

const syllables = [
    new Syllable(hiragana, 'k', 'ka'),
    new Syllable(hiragana, 'k', 'ki'),
    new Syllable(hiragana, 'k', 'ku'),
    new Syllable(hiragana, 'k', 'ke'),
    new Syllable(hiragana, 'k', 'ko'),
];
const lesson:Lesson = new Lesson(syllables, 'ka ki ku ke ko', 1);
const lessons:Array<Lesson> = groupSyllablesInLessons();

describe('Lesson', function () {

    it(`should provide lesson with id`, function () {
        const sut = lesson.id;
        const expected = 'kakikukeko';

        expect(sut).toBe(expected)
    });

    it(`should provide number of lessons`, function () {
        const sut = lessons;
        const expected = 13;

        expect(sut.length).toBe(expected)
    });

});
