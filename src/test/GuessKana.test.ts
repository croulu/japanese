import {Syllable} from "../domain/Syllable";
import {Alphabet} from "../domain/Alphabet";
import {SyllableKana} from "../domain/SyllableKana";
import {GuessKana} from "../domain/GuessKana";
import {SyllableRomaji} from "../domain/SyllableRomaji";

const hiragana:Alphabet = new Alphabet("hiragana");
const consonant:string = "";
const vowel:string = "i";

const syllables = [
    new Syllable(hiragana, '', 'a'),
    new Syllable(hiragana, '', 'i'),
    new Syllable(hiragana, '', 'u'),
    new Syllable(hiragana, '', 'e'),
    new Syllable(hiragana, '', 'o'),
];

const syllableToGuess = new Syllable(hiragana, consonant, vowel);
const kanaDisplay:string = "\u3044";
const romajiDisplay:string = "i";

const kana = new SyllableKana(hiragana, consonant, vowel);
const romaji = new SyllableRomaji(hiragana, consonant, vowel);

describe('GuessKana', function () {

    it(`should provide one kana to guess`, function () {
        const sut = new GuessKana(syllables);
        const actual = sut.kana;

        expect(actual).toBeInstanceOf(SyllableKana);
    });

    it(`should say true      hd dhd h as the romaji proposed by the user is the good one`, function () {
        const sut = new GuessKana(syllables);
        sut.syllable = syllableToGuess;
        sut.romajiProposedByUser = romaji;
        const actual = sut.romajiProposedByUser.text;

        const romajiForThisSyllable = new SyllableRomaji(sut.syllable.alphabet, sut.syllable.consonant, sut.syllable.vowel).display();

        expect(actual).toBe(romajiForThisSyllable);
    });

});
