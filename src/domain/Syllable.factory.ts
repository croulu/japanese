import {Syllable} from "./Syllable";
import {Lesson} from "./Lesson";
import {Alphabet} from "./Alphabet";

export const allAlphabets:Array<Alphabet> = [new Alphabet('hiragana'), new Alphabet('katakana')];

// TODO : vérifier les order pour les dakuten et handakuten
// TODO : générer le title comme les romajis avec des espaces
// TODO : mauvais affichage de l'alphabet wa wo n à cause du style de la lesson (conflit lesson et style)
// TODO : style ya yu yo et wa wo n pas propre (pas étiré)

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
    ["hiraganata", "\u305F", "ta"],
    ["hiraganati", "\u3061", "chi"],
    ["hiraganatu", "\u3064", "tsu"],
    ["hiraganate", "\u3066", "te"],
    ["hiraganato", "\u3068", "to"],
    ["hiraganana", "\u306A", "na"],
    ["hiraganani", "\u306B", "ni"],
    ["hiragananu", "\u306C", "nu"],
    ["hiraganane", "\u306D", "ne"],
    ["hiraganano", "\u306E", "no"],
    ["hiraganaha", "\u306F", "ha"],
    ["hiraganahi", "\u3072", "hi"],
    ["hiraganahu", "\u3075", "fu"],
    ["hiraganahe", "\u3078", "he"],
    ["hiraganaho", "\u307B", "ho"],
    ["hiraganama", "\u307E", "ma"],
    ["hiraganami", "\u307F", "mi"],
    ["hiraganamu", "\u3080", "mu"],
    ["hiraganame", "\u3081", "me"],
    ["hiraganamo", "\u3082", "mo"],
    ["hiraganaya", "\u3084", "ya"],
    ["hiraganayu", "\u3086", "yu"],
    ["hiraganayo", "\u3088", "yo"],
    ["hiraganara", "\u3089", "ra"],
    ["hiraganari", "\u308A", "ri"],
    ["hiraganaru", "\u308B", "ru"],
    ["hiraganare", "\u308C", "re"],
    ["hiraganaro", "\u308D", "ro"],
    ["hiraganawa", "\u308F", "wa"],
    ["hiraganawo", "\u3092", "wo"],
    ["hiraganan", "\u3093", "n"],
    ["hiraganaga", "\u304C", "ga"],
    ["hiraganagi", "\u304E", "gi"],
    ["hiraganagu", "\u3050", "gu"],
    ["hiraganage", "\u3052", "ge"],
    ["hiraganago", "\u3054", "go"],
    ["hiraganaza", "\u3056", "za"],
    ["hiraganazi", "\u3058", "ji"],
    ["hiraganazu", "\u305A", "zu"],
    ["hiraganaze", "\u305C", "ze"],
    ["hiraganazo", "\u305E", "zo"],
    ["hiraganada", "\u3060", "da"],
    ["hiraganadi", "\u3062", "ji"],
    ["hiraganadu", "\u3065", "zu"],
    ["hiraganade", "\u3067", "de"],
    ["hiraganado", "\u3069", "do"],
    ["hiraganaba", "\u3070", "ba"],
    ["hiraganabi", "\u3073", "bi"],
    ["hiraganabu", "\u3076", "bu"],
    ["hiraganabe", "\u3079", "be"],
    ["hiraganabo", "\u307C", "bo"],
    ["hiraganapa", "\u3071", "pa"],
    ["hiraganapi", "\u3074", "pi"],
    ["hiraganapu", "\u3077", "pu"],
    ["hiraganape", "\u307A", "pe"],
    ["hiraganapo", "\u307D", "po"],
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
    ["katakanata", "\u30BF", "ta"],
    ["katakanati", "\u30C1", "chi"],
    ["katakanatu", "\u30C4", "tsu"],
    ["katakanate", "\u30C6", "te"],
    ["katakanato", "\u30C8", "to"],
    ["katakanana", "\u30CA", "na"],
    ["katakanani", "\u30CB", "ni"],
    ["katakananu", "\u30CC", "nu"],
    ["katakanane", "\u30CD", "ne"],
    ["katakanano", "\u30CE", "no"],
    ["katakanaha", "\u30CF", "ha"],
    ["katakanahi", "\u30D2", "hi"],
    ["katakanahu", "\u30D5", "fu"],
    ["katakanahe", "\u30D8", "he"],
    ["katakanaho", "\u30DB", "ho"],
    ["katakanama", "\u30DE", "ma"],
    ["katakanami", "\u30DF", "mi"],
    ["katakanamu", "\u30E0", "mu"],
    ["katakaname", "\u30E1", "me"],
    ["katakanamo", "\u30E2", "mo"],
    ["katakanaya", "\u30E4", "ya"],
    ["katakanayu", "\u30E6", "yu"],
    ["katakanayo", "\u30E8", "yo"],
    ["katakanara", "\u30E9", "ra"],
    ["katakanari", "\u30EA", "ri"],
    ["katakanaru", "\u30EB", "ru"],
    ["katakanare", "\u30EC", "re"],
    ["katakanaro", "\u30ED", "ro"],
    ["katakanawa", "\u30EF", "wa"],
    ["katakanawo", "\u30F2", "wo"],
    ["katakanan", "\u30F3", "n"],
    ["katakanaga", "\u30AC", "ga"],
    ["katakanagi", "\u30AE", "gi"],
    ["katakanagu", "\u30B0", "gu"],
    ["katakanage", "\u30B2", "ge"],
    ["katakanago", "\u30B4", "go"],
    ["katakanaza", "\u30B6", "za"],
    ["katakanazi", "\u30B8", "ji"],
    ["katakanazu", "\u30BA", "zu"],
    ["katakanaze", "\u30BC", "ze"],
    ["katakanazo", "\u30BE", "zo"],
    ["katakanada", "\u30C0", "da"],
    ["katakanadi", "\u30C2", "ji"],
    ["katakanadu", "\u30C5", "zu"],
    ["katakanade", "\u30C7", "de"],
    ["katakanado", "\u30C9", "do"],
    ["katakanaba", "\u30D0", "ba"],
    ["katakanabi", "\u30D3", "bi"],
    ["katakanabu", "\u30D6", "bu"],
    ["katakanabe", "\u30D9", "be"],
    ["katakanabo", "\u30DC", "bo"],
    ["katakanapa", "\u30D1", "pa"],
    ["katakanapi", "\u30D4", "pi"],
    ["katakanapu", "\u30D7", "pu"],
    ["katakanape", "\u30DA", "pe"],
    ["katakanapo", "\u30DD", "po"],
];

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
        new Lesson([
            new Syllable(alphabet, 'g', 'a'),
            new Syllable(alphabet, 'g', 'i'),
            new Syllable(alphabet, 'g', 'u'),
            new Syllable(alphabet, 'g', 'e'),
            new Syllable(alphabet, 'g', 'o'),
        ], 'ga gi gu ge go', 12),
        new Lesson([
            new Syllable(alphabet, 'z', 'a'),
            new Syllable(alphabet, 'z', 'i'),
            new Syllable(alphabet, 'z', 'u'),
            new Syllable(alphabet, 'z', 'e'),
            new Syllable(alphabet, 'z', 'o'),
        ], 'za ji zu ze zo', 13),
        new Lesson([
            new Syllable(alphabet, 'd', 'a'),
            new Syllable(alphabet, 'd', 'i'),
            new Syllable(alphabet, 'd', 'u'),
            new Syllable(alphabet, 'd', 'e'),
            new Syllable(alphabet, 'd', 'o'),
        ], 'da ji zu de do', 14),
        new Lesson([
            new Syllable(alphabet, 'b', 'a'),
            new Syllable(alphabet, 'b', 'i'),
            new Syllable(alphabet, 'b', 'u'),
            new Syllable(alphabet, 'b', 'e'),
            new Syllable(alphabet, 'b', 'o'),
        ], 'ba bi bu be bo', 15),
        new Lesson([
            new Syllable(alphabet, 'p', 'a'),
            new Syllable(alphabet, 'p', 'i'),
            new Syllable(alphabet, 'p', 'u'),
            new Syllable(alphabet, 'p', 'e'),
            new Syllable(alphabet, 'p', 'o'),
        ], 'pa pi pu pe po', 16),
    ];

    return lessons;
}
