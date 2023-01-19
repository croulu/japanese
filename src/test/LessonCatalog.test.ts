import {LessonCatalog} from "../domain/LessonCatalog";

describe('LessonCatalog', function () {
    it(`should provide lessons structured in alphabets`, function () {
        const sut = new LessonCatalog();
        const expected = 15;

        expect(sut.hiragana.length).toBe(expected)
        expect(sut.katakana.length).toBe(expected)
    });
});
