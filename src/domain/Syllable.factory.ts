import {Syllable} from "./Syllable";
import {Lesson} from "./Lesson";

const syllableH_A:Syllable = new Syllable('hiragana', '', 'a');
const syllableH_I:Syllable = new Syllable('hiragana', '', 'i');
const syllableH_U:Syllable = new Syllable('hiragana', '', 'u');
const syllableH_E:Syllable = new Syllable('hiragana', '', 'e');
const syllableH_O:Syllable = new Syllable('hiragana', '', 'o');
const syllableHKA:Syllable = new Syllable('hiragana', 'k', 'a');
const syllableHKI:Syllable = new Syllable('hiragana', 'k', 'i');
const syllableHKU:Syllable = new Syllable('hiragana', 'k', 'u');
const syllableHKE:Syllable = new Syllable('hiragana', 'k', 'e');
const syllableHKO:Syllable = new Syllable('hiragana', 'k', 'o');
const syllableHSA:Syllable = new Syllable('hiragana', 's', 'a');
const syllableHSI:Syllable = new Syllable('hiragana', 's', 'i');
const syllableHSU:Syllable = new Syllable('hiragana', 's', 'u');
const syllableHSE:Syllable = new Syllable('hiragana', 's', 'e');
const syllableHSO:Syllable = new Syllable('hiragana', 's', 'o');

const idH_A = syllableH_A.id;
const idH_I = syllableH_I.id;
const idH_U = syllableH_U.id;
const idH_E = syllableH_E.id;
const idH_O = syllableH_O.id;
const idHKA = syllableHKA.id;
const idHKI = syllableHKI.id;
const idHKU = syllableHKU.id;
const idHKE = syllableHKE.id;
const idHKO = syllableHKO.id;
const idHSA = syllableHSA.id;
const idHSI = syllableHSI.id;
const idHSU = syllableHSU.id;
const idHSE = syllableHSE.id;
const idHSO = syllableHSO.id;

export const syllableFactory = new Map();
syllableFactory.set(idH_A, syllableH_A);
syllableFactory.set(idH_I, syllableH_I);
syllableFactory.set(idH_U, syllableH_U);
syllableFactory.set(idH_E, syllableH_E);
syllableFactory.set(idH_O, syllableH_O);
syllableFactory.set(idHKA, syllableHKA);
syllableFactory.set(idHKI, syllableHKI);
syllableFactory.set(idHKU, syllableHKU);
syllableFactory.set(idHKE, syllableHKE);
syllableFactory.set(idHKO, syllableHKO);
syllableFactory.set(idHSA, syllableHSA);
syllableFactory.set(idHSI, syllableHSI);
syllableFactory.set(idHSU, syllableHSU);
syllableFactory.set(idHSE, syllableHSE);
syllableFactory.set(idHSO, syllableHSO);

export const romajiFactory = new Map();
romajiFactory.set(idH_A, "a");
romajiFactory.set(idH_I, "i");
romajiFactory.set(idH_U, "u");
romajiFactory.set(idH_E, "e");
romajiFactory.set(idH_O, "o");
romajiFactory.set(idHKA, "ka");
romajiFactory.set(idHKI, "ki");
romajiFactory.set(idHKU, "ku");
romajiFactory.set(idHKE, "ke");
romajiFactory.set(idHKO, "ko");
romajiFactory.set(idHSA, "sa");
romajiFactory.set(idHSI, "shi");
romajiFactory.set(idHSU, "su");
romajiFactory.set(idHSE, "se");
romajiFactory.set(idHSO, "so");

export const kanaFactory = new Map();
kanaFactory.set(idH_A, "\u3042");
kanaFactory.set(idH_I, "\u3044");
kanaFactory.set(idH_U, "\u3046");
kanaFactory.set(idH_E, "\u3048");
kanaFactory.set(idH_O, "\u304A");
kanaFactory.set(idHKA, "\u304B");
kanaFactory.set(idHKI, "\u304D");
kanaFactory.set(idHKU, "\u304F");
kanaFactory.set(idHKE, "\u3051");
kanaFactory.set(idHKO, "\u3053");
kanaFactory.set(idHSA, "\u3055");
kanaFactory.set(idHSI, "\u3057");
kanaFactory.set(idHSU, "\u3059");
kanaFactory.set(idHSE, "\u305B");
kanaFactory.set(idHSO, "\u305D");

export function groupLessonsInCatalog():Array<Lesson> {
    let lessons:Array<Lesson>;

    lessons = [
        new Lesson([
            syllableFactory.get(idH_A),
            syllableFactory.get(idH_I),
            syllableFactory.get(idH_U),
            syllableFactory.get(idH_E),
            syllableFactory.get(idH_O),
        ], 'a i u e o', 1),
        new Lesson([
            syllableFactory.get(idHKA),
            syllableFactory.get(idHKI),
            syllableFactory.get(idHKU),
            syllableFactory.get(idHKE),
            syllableFactory.get(idHKO),
        ], 'ka ki ku ke ko', 2),
        new Lesson([
            syllableFactory.get(idHSA),
            syllableFactory.get(idHSI),
            syllableFactory.get(idHSU),
            syllableFactory.get(idHSE),
            syllableFactory.get(idHSO),
        ], 'sa shi su se so', 3),
    ];

    return lessons;
}
