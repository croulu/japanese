import {Lesson} from "../domain/Lesson";
import {Syllable} from "../domain/Syllable";
import {lessonFactory, withId} from "../domain/Lesson.factory";

const syllables = [
    new Syllable('hiragana', 'k', 'ka'),
    new Syllable('hiragana', 'k', 'ki'),
    new Syllable('hiragana', 'k', 'ku'),
    new Syllable('hiragana', 'k', 'ke'),
    new Syllable('hiragana', 'k', 'ko'),
];
const lesson:Lesson = new Lesson(syllables, 'ka ki ku ke ko', 1);
const lessons:Array<Lesson> = lessonFactory();

describe('Lesson', function () {

    it(`should provide lesson with id`, function () {
        const sut = withId(lesson).id;
        const expected = 'kakikukeko';

        expect(sut).toBe(expected)
    });

    it(`should provide lessons structured in alphabets`, function () {
        const sut = lessons;
        const expected = 3;

        expect(sut.length).toBe(expected)
    });

});
