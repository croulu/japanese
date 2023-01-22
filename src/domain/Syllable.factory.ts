import {Syllable} from "./Syllable";
import {Lesson} from "./Lesson";
import {Alphabet} from "./Alphabet";

export const syllables:Array<Syllable> = [];

const hiragana = new Alphabet('hiragana');
const katakana = new Alphabet('katakana');

export const allAlphabets:Array<Alphabet> = [];
allAlphabets.push(hiragana);
allAlphabets.push(katakana);

// TODO : vérifier les order pour les dakuten et handakuten
// TODO : générer le title comme les romajis avec des espaces

export const mappingSyllableKanaRomaji:Array<string[]> = [
    ["hiraganaa", "\u3042", "a"],
    ["hiraganai", "\u3044", "i"],
    ["hiraganau", "\u3046", "u"],
    ["hiraganae", "\u3048", "e"],
    ["hiraganao", "\u304A", "o"],
    ["hiraganaka", "\u304B", "ka"],
    ["hiraganaki", "\u304D", "ki"],
    ["hiraganaku", "\u304F", "ku"],
    ["hiraganake", "\u3051", "ke"],
    ["hiraganako", "\u3053", "ko"],
    ["hiraganasa", "\u3055", "sa"],
    ["hiraganasi", "\u3057", "shi"],
    ["hiraganasu", "\u3059", "su"],
    ["hiraganase", "\u305B", "se"],
    ["hiraganaso", "\u305D", "so"],
    ["katakanaa", "\u30A2", "a"],
    ["katakanai", "\u30A4", "i"],
    ["katakanau", "\u30A6", "u"],
    ["katakanae", "\u30A8", "e"],
    ["katakanao", "\u30AA", "o"],
    ["katakanaka", "\u30AB", "ka"],
    ["katakanaki", "\u30AD", "ki"],
    ["katakanaku", "\u30AF", "ku"],
    ["katakanake", "\u30B1", "ke"],
    ["katakanako", "\u30B3", "ko"],
    ["katakanasa", "\u30B5", "sa"],
    ["katakanasi", "\u30B7", "shi"],
    ["katakanasu", "\u30B9", "su"],
    ["katakanase", "\u30BB", "se"],
    ["katakanaso", "\u30BD", "so"],
];

export function groupSyllablesInAlphabets(alphabet:Alphabet):Array<Syllable> {
    let syllables:Array<Syllable> = [];

    syllables = [
        new Syllable(alphabet, '', 'a'),
        new Syllable(alphabet, '', 'i'),
    ];

    return syllables;
}

export function groupSyllablesInLessons(alphabet:Alphabet):Array<Lesson> {
    let lessons:Array<Lesson>;

    lessons = [
        new Lesson([
            new Syllable(alphabet, '', 'a'),
            new Syllable(alphabet, '', 'i'),
            new Syllable(alphabet, '', 'u'),
            new Syllable(alphabet, '', 'e'),
            new Syllable(alphabet, '', 'o'),
        ], 'a i u e o', 1),
        new Lesson([
            new Syllable(alphabet, 'k', 'a'),
            new Syllable(alphabet, 'k', 'i'),
            new Syllable(alphabet, 'k', 'u'),
            new Syllable(alphabet, 'k', 'e'),
            new Syllable(alphabet, 'k', 'o'),
        ], 'ka ki ku ke ko', 2),
        new Lesson([
            new Syllable(alphabet, 's', 'a'),
            new Syllable(alphabet, 's', 'i'),
            new Syllable(alphabet, 's', 'u'),
            new Syllable(alphabet, 's', 'e'),
            new Syllable(alphabet, 's', 'o'),
        ], 'sa shi su se so', 3),
        /*
        new Lesson([
            new Syllable(alphabet, 't', 'a'),
            new Syllable(alphabet, 't', 'i'),
            new Syllable(alphabet, 't', 'u'),
            new Syllable(alphabet, 't', 'e'),
            new Syllable(alphabet, 't', 'o'),
        ], 'ta chi tsu te to', 4),
        new Lesson([
            new Syllable(alphabet, 'n', 'a'),
            new Syllable(alphabet, 'n', 'i'),
            new Syllable(alphabet, 'n', 'u'),
            new Syllable(alphabet, 'n', 'e'),
            new Syllable(alphabet, 'n', 'o'),
        ], 'na ni nu ne no', 5),
        new Lesson([
            new Syllable(alphabet, 'h', 'a'),
            new Syllable(alphabet, 'h', 'i'),
            new Syllable(alphabet, 'h', 'u'),
            new Syllable(alphabet, 'h', 'e'),
            new Syllable(alphabet, 'h', 'o'),
        ], 'ha hi fu he ho', 6),
        new Lesson([
            new Syllable(alphabet, 'm', 'a'),
            new Syllable(alphabet, 'm', 'i'),
            new Syllable(alphabet, 'm', 'u'),
            new Syllable(alphabet, 'm', 'e'),
            new Syllable(alphabet, 'm', 'o'),

        ], 'ma mi mu me mo', 7),
        new Lesson([
            new Syllable(alphabet, 'y', 'a'),
            new Syllable(alphabet, 'y', 'u'),
            new Syllable(alphabet, 'y', 'o'),
        ], 'ya mu mo', 8),
        new Lesson([
            new Syllable(alphabet, 'r', 'a'),
            new Syllable(alphabet, 'r', 'i'),
            new Syllable(alphabet, 'r', 'u'),
            new Syllable(alphabet, 'r', 'e'),
            new Syllable(alphabet, 'r', 'o'),
        ], 'ra ri ru re ro', 9),
        new Lesson([
            new Syllable(alphabet, 'w', 'a'),
            new Syllable(alphabet, 'w', 'o'),
            new Syllable(alphabet, 'n', ''),
        ], 'wa wo n', 10),

 */
    ];

    return lessons;
}
