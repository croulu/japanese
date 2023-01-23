import {Lesson} from "../domain/Lesson";
import {Syllable} from "../domain/Syllable";
import {Alphabet} from "../domain/Alphabet";

const hiragana = new Alphabet("hiragana");

const firstSyllable = new Syllable(hiragana, 'k', 'a');
const syllables = [
    new Syllable(hiragana, 'k', 'a'),
    new Syllable(hiragana, 'k', 'i'),
    new Syllable(hiragana, 'k', 'u'),
    new Syllable(hiragana, 'k', 'e'),
    new Syllable(hiragana, 'k', 'o'),
];

const lesson:Lesson = new Lesson(syllables, 'ka ki ku ke ko', 2);

const lessonDifficult:Lesson = new Lesson(syllables, 'sa shi su se so', 3);
const syllablesDifficult = [
    new Syllable(hiragana, '', 'a'),
    new Syllable(hiragana, '', 'i'),
    new Syllable(hiragana, '', 'u'),
    new Syllable(hiragana, '', 'e'),
    new Syllable(hiragana, '', 'o'),
    new Syllable(hiragana, 'k', 'a'),
    new Syllable(hiragana, 'k', 'i'),
    new Syllable(hiragana, 'k', 'u'),
    new Syllable(hiragana, 'k', 'e'),
    new Syllable(hiragana, 'k', 'o'),
    new Syllable(hiragana, 's', 'a'),
    new Syllable(hiragana, 's', 'i'),
    new Syllable(hiragana, 's', 'u'),
    new Syllable(hiragana, 's', 'e'),
    new Syllable(hiragana, 's', 'o'),
];

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

    it('should provide syllables for a level difficult', function () {
        const sut = lessonDifficult.completeSyllablesForDifficultLesson();
        const expected = syllablesDifficult;

        expect(sut).toStrictEqual(expected)
    });

});
