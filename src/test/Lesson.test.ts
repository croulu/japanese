import {Lesson, lessonCatalog} from "../domain/Lesson";

const lessons:Array<Lesson> = lessonCatalog();

describe('Lesson', function () {
    it(`should provide lessons structured in alphabets`, function () {
        const sut = lessons;
        const expected = 2;

        expect(sut.length).toBe(expected)
    });
});
