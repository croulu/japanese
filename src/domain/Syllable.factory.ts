import {Syllable} from "./Syllable";
import {Lesson} from "./Lesson";
import {Alphabet} from "./Alphabet";

export const syllables:Array<Syllable> = [];

const hiragana = new Alphabet('hiragana');
const katakana = new Alphabet('katakana');

export const allAlphabets:Array<Alphabet> = [];
allAlphabets.push(hiragana);
allAlphabets.push(katakana);

const syllableH_A:Syllable = new Syllable(hiragana, '', 'a');
const syllableH_I:Syllable = new Syllable(hiragana, '', 'i');
const syllableH_U:Syllable = new Syllable(hiragana, '', 'u');
const syllableH_E:Syllable = new Syllable(hiragana, '', 'e');
const syllableH_O:Syllable = new Syllable(hiragana, '', 'o');
const syllableHKA:Syllable = new Syllable(hiragana, 'k', 'a');
const syllableHKI:Syllable = new Syllable(hiragana, 'k', 'i');
const syllableHKU:Syllable = new Syllable(hiragana, 'k', 'u');
const syllableHKE:Syllable = new Syllable(hiragana, 'k', 'e');
const syllableHKO:Syllable = new Syllable(hiragana, 'k', 'o');
const syllableHSA:Syllable = new Syllable(hiragana, 's', 'a');
const syllableHSI:Syllable = new Syllable(hiragana, 's', 'i');
const syllableHSU:Syllable = new Syllable(hiragana, 's', 'u');
const syllableHSE:Syllable = new Syllable(hiragana, 's', 'e');
const syllableHSO:Syllable = new Syllable(hiragana, 's', 'o');
const syllableHTA:Syllable = new Syllable(hiragana, 't', 'a');
const syllableHTI:Syllable = new Syllable(hiragana, 't', 'i');
const syllableHTU:Syllable = new Syllable(hiragana, 't', 'u');
const syllableHTE:Syllable = new Syllable(hiragana, 't', 'e');
const syllableHTO:Syllable = new Syllable(hiragana, 't', 'o');
const syllableHNA:Syllable = new Syllable(hiragana, 'n', 'a');
const syllableHNI:Syllable = new Syllable(hiragana, 'n', 'i');
const syllableHNU:Syllable = new Syllable(hiragana, 'n', 'u');
const syllableHNE:Syllable = new Syllable(hiragana, 'n', 'e');
const syllableHNO:Syllable = new Syllable(hiragana, 'n', 'o');
const syllableHHA:Syllable = new Syllable(hiragana, 'h', 'a');
const syllableHHI:Syllable = new Syllable(hiragana, 'h', 'i');
const syllableHHU:Syllable = new Syllable(hiragana, 'h', 'u');
const syllableHHE:Syllable = new Syllable(hiragana, 'h', 'e');
const syllableHHO:Syllable = new Syllable(hiragana, 'h', 'o');
const syllableHMA:Syllable = new Syllable(hiragana, 'm', 'a');
const syllableHMI:Syllable = new Syllable(hiragana, 'm', 'i');
const syllableHMU:Syllable = new Syllable(hiragana, 'm', 'u');
const syllableHME:Syllable = new Syllable(hiragana, 'm', 'e');
const syllableHMO:Syllable = new Syllable(hiragana, 'm', 'o');
const syllableHYA:Syllable = new Syllable(hiragana, 'y', 'a');
const syllableHYU:Syllable = new Syllable(hiragana, 'y', 'u');
const syllableHYO:Syllable = new Syllable(hiragana, 'y', 'o');
const syllableHRA:Syllable = new Syllable(hiragana, 'r', 'a');
const syllableHRI:Syllable = new Syllable(hiragana, 'r', 'i');
const syllableHRU:Syllable = new Syllable(hiragana, 'r', 'u');
const syllableHRE:Syllable = new Syllable(hiragana, 'r', 'e');
const syllableHRO:Syllable = new Syllable(hiragana, 'r', 'o');
const syllableHWA:Syllable = new Syllable(hiragana, 'w', 'a');
const syllableHWO:Syllable = new Syllable(hiragana, 'w', 'o');
const syllableHN:Syllable = new Syllable(hiragana, 'n', '');

const syllableK_A:Syllable = new Syllable(katakana, '', 'a');
const syllableK_I:Syllable = new Syllable(katakana, '', 'i');
const syllableK_U:Syllable = new Syllable(katakana, '', 'u');
const syllableK_E:Syllable = new Syllable(katakana, '', 'e');
const syllableK_O:Syllable = new Syllable(katakana, '', 'o');
const syllableKKA:Syllable = new Syllable(katakana, 'k', 'a');
const syllableKKI:Syllable = new Syllable(katakana, 'k', 'i');
const syllableKKU:Syllable = new Syllable(katakana, 'k', 'u');
const syllableKKE:Syllable = new Syllable(katakana, 'k', 'e');
const syllableKKO:Syllable = new Syllable(katakana, 'k', 'o');
const syllableKSA:Syllable = new Syllable(katakana, 's', 'a');
const syllableKSI:Syllable = new Syllable(katakana, 's', 'i');
const syllableKSU:Syllable = new Syllable(katakana, 's', 'u');
const syllableKSE:Syllable = new Syllable(katakana, 's', 'e');
const syllableKSO:Syllable = new Syllable(katakana, 's', 'o');
const syllableKTA:Syllable = new Syllable(katakana, 't', 'a');
const syllableKTI:Syllable = new Syllable(katakana, 't', 'i');
const syllableKTU:Syllable = new Syllable(katakana, 't', 'u');
const syllableKTE:Syllable = new Syllable(katakana, 't', 'e');
const syllableKTO:Syllable = new Syllable(katakana, 't', 'o');

export const idH_A = syllableH_A.id;
export const idH_I = syllableH_I.id;
export const idH_U = syllableH_U.id;
export const idH_E = syllableH_E.id;
export const idH_O = syllableH_O.id;
export const idHKA = syllableHKA.id;
export const idHKI = syllableHKI.id;
export const idHKU = syllableHKU.id;
export const idHKE = syllableHKE.id;
export const idHKO = syllableHKO.id;
const idHSA = syllableHSA.id;
const idHSI = syllableHSI.id;
const idHSU = syllableHSU.id;
const idHSE = syllableHSE.id;
const idHSO = syllableHSO.id;
const idHTA = syllableHTA.id;
const idHTI = syllableHTI.id;
const idHTU = syllableHTU.id;
const idHTE = syllableHTE.id;
const idHTO = syllableHTO.id;
const idHNA = syllableHNA.id;
const idHNI = syllableHNI.id;
const idHNU = syllableHNU.id;
const idHNE = syllableHNE.id;
const idHNO = syllableHNO.id;
const idHHA = syllableHHA.id;
const idHHI = syllableHHI.id;
const idHHU = syllableHHU.id;
const idHHE = syllableHHE.id;
const idHHO = syllableHHO.id;
const idHMA = syllableHMA.id;
const idHMI = syllableHMI.id;
const idHMU = syllableHMU.id;
const idHME = syllableHME.id;
const idHMO = syllableHMO.id;
const idHYA = syllableHYA.id;
const idHYU = syllableHYU.id;
const idHYO = syllableHYO.id;
const idHRA = syllableHRA.id;
const idHRI = syllableHRI.id;
const idHRU = syllableHRU.id;
const idHRE = syllableHRE.id;
const idHRO = syllableHRO.id;
const idHWA = syllableHWA.id;
const idHWO = syllableHWO.id;
const idHN = syllableHN.id;

const idK_A = syllableK_A.id;
const idK_I = syllableK_I.id;
const idK_U = syllableK_U.id;
const idK_E = syllableK_E.id;
const idK_O = syllableK_O.id;
const idKKA = syllableKKA.id;
const idKKI = syllableKKI.id;
const idKKU = syllableKKU.id;
const idKKE = syllableKKE.id;
const idKKO = syllableKKO.id;
const idKSA = syllableKSA.id;
const idKSI = syllableKSI.id;
const idKSU = syllableKSU.id;
const idKSE = syllableKSE.id;
const idKSO = syllableKSO.id;
const idKTA = syllableKTA.id;
const idKTI = syllableKTI.id;
const idKTU = syllableKTU.id;
const idKTE = syllableKTE.id;
const idKTO = syllableKTO.id;

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
syllableFactory.set(idHTA, syllableHTA);
syllableFactory.set(idHTI, syllableHTI);
syllableFactory.set(idHTU, syllableHTU);
syllableFactory.set(idHTE, syllableHTE);
syllableFactory.set(idHTO, syllableHTO);
syllableFactory.set(idHNA, syllableHNA);
syllableFactory.set(idHNI, syllableHNI);
syllableFactory.set(idHNU, syllableHNU);
syllableFactory.set(idHNE, syllableHNE);
syllableFactory.set(idHNO, syllableHNO);
syllableFactory.set(idHHA, syllableHHA);
syllableFactory.set(idHHI, syllableHHI);
syllableFactory.set(idHHU, syllableHHU);
syllableFactory.set(idHHE, syllableHHE);
syllableFactory.set(idHHO, syllableHHO);
syllableFactory.set(idHMA, syllableHMA);
syllableFactory.set(idHMI, syllableHMI);
syllableFactory.set(idHMU, syllableHMU);
syllableFactory.set(idHME, syllableHME);
syllableFactory.set(idHMO, syllableHMO);
syllableFactory.set(idHYA, syllableHYA);
syllableFactory.set(idHYU, syllableHYU);
syllableFactory.set(idHYO, syllableHYO);
syllableFactory.set(idHRA, syllableHRA);
syllableFactory.set(idHRI, syllableHRI);
syllableFactory.set(idHRU, syllableHRU);
syllableFactory.set(idHRE, syllableHRE);
syllableFactory.set(idHRO, syllableHRO);
syllableFactory.set(idHWA, syllableHWA);
syllableFactory.set(idHWO, syllableHWO);
syllableFactory.set(idHN, syllableHN);

syllableFactory.set(idK_A, syllableK_A);
syllableFactory.set(idK_I, syllableK_I);
syllableFactory.set(idK_U, syllableK_U);
syllableFactory.set(idK_E, syllableK_E);
syllableFactory.set(idK_O, syllableK_O);
syllableFactory.set(idKKA, syllableKKA);
syllableFactory.set(idKKI, syllableKKI);
syllableFactory.set(idKKU, syllableKKU);
syllableFactory.set(idKKE, syllableKKE);
syllableFactory.set(idKKO, syllableKKO);
syllableFactory.set(idKSA, syllableKSA);
syllableFactory.set(idKSI, syllableKSI);
syllableFactory.set(idKSU, syllableKSU);
syllableFactory.set(idKSE, syllableKSE);
syllableFactory.set(idKSO, syllableKSO);
syllableFactory.set(idKTA, syllableKTA);
syllableFactory.set(idKTI, syllableKTI);
syllableFactory.set(idKTU, syllableKTU);
syllableFactory.set(idKTE, syllableKTE);
syllableFactory.set(idKTO, syllableKTO);

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
romajiFactory.set(idHTA, "ta");
romajiFactory.set(idHTI, "chi");
romajiFactory.set(idHTU, "tsu");
romajiFactory.set(idHTE, "te");
romajiFactory.set(idHTO, "to");
romajiFactory.set(idHNA, "na");
romajiFactory.set(idHNI, "ni");
romajiFactory.set(idHNU, "nu");
romajiFactory.set(idHNE, "ne");
romajiFactory.set(idHNO, "no");
romajiFactory.set(idHHA, "ha");
romajiFactory.set(idHHI, "hi");
romajiFactory.set(idHHU, "fu");
romajiFactory.set(idHHE, "he");
romajiFactory.set(idHHO, "ho");
romajiFactory.set(idHMA, "ma");
romajiFactory.set(idHMI, "mi");
romajiFactory.set(idHMU, "mu");
romajiFactory.set(idHME, "me");
romajiFactory.set(idHMO, "mo");
romajiFactory.set(idHYA, "ya");
romajiFactory.set(idHYU, "yu");
romajiFactory.set(idHYO, "yo");
romajiFactory.set(idHRA, "ra");
romajiFactory.set(idHRI, "ri");
romajiFactory.set(idHRU, "ru");
romajiFactory.set(idHRE, "re");
romajiFactory.set(idHRO, "ro");
romajiFactory.set(idHWA, "wa");
romajiFactory.set(idHWO, "wo");
romajiFactory.set(idHN, "n");

romajiFactory.set(idK_A, "a");
romajiFactory.set(idK_I, "i");
romajiFactory.set(idK_U, "u");
romajiFactory.set(idK_E, "e");
romajiFactory.set(idK_O, "o");
romajiFactory.set(idKKA, "ka");
romajiFactory.set(idKKI, "ki");
romajiFactory.set(idKKU, "ku");
romajiFactory.set(idKKE, "ke");
romajiFactory.set(idKKO, "ko");
romajiFactory.set(idKSA, "sa");
romajiFactory.set(idKSI, "shi");
romajiFactory.set(idKSU, "su");
romajiFactory.set(idKSE, "se");
romajiFactory.set(idKSO, "so");
romajiFactory.set(idKTA, "ta");
romajiFactory.set(idKTI, "chi");
romajiFactory.set(idKTU, "tsu");
romajiFactory.set(idKTE, "te");
romajiFactory.set(idKTO, "to");

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
kanaFactory.set(idHTA, "\u305F");
kanaFactory.set(idHTI, "\u3061");
kanaFactory.set(idHTU, "\u3064");
kanaFactory.set(idHTE, "\u3066");
kanaFactory.set(idHTO, "\u3068");
kanaFactory.set(idHNA, "\u306A");
kanaFactory.set(idHNI, "\u306B");
kanaFactory.set(idHNU, "\u306C");
kanaFactory.set(idHNE, "\u306D");
kanaFactory.set(idHNO, "\u306E");
kanaFactory.set(idHHA, "\u306F");
kanaFactory.set(idHHI, "\u3072");
kanaFactory.set(idHHU, "\u3075");
kanaFactory.set(idHHE, "\u3078");
kanaFactory.set(idHHO, "\u307B");
kanaFactory.set(idHMA, "\u307E");
kanaFactory.set(idHMI, "\u307F");
kanaFactory.set(idHMU, "\u3080");
kanaFactory.set(idHME, "\u3081");
kanaFactory.set(idHMO, "\u3082");
kanaFactory.set(idHYA, "\u3084");
kanaFactory.set(idHYU, "\u3086");
kanaFactory.set(idHYO, "\u3088");
kanaFactory.set(idHRA, "\u3089");
kanaFactory.set(idHRI, "\u308A");
kanaFactory.set(idHRU, "\u308B");
kanaFactory.set(idHRE, "\u308C");
kanaFactory.set(idHRO, "\u308D");
kanaFactory.set(idHWA, "\u308F");
kanaFactory.set(idHWO, "\u3092");
kanaFactory.set(idHN, "\u3093");

kanaFactory.set(idK_A, "\u30A2");
kanaFactory.set(idK_I, "\u30A4");
kanaFactory.set(idK_U, "\u30A6");
kanaFactory.set(idK_E, "\u30A8");
kanaFactory.set(idK_O, "\u30AA");
kanaFactory.set(idKKA, "\u30AB");
kanaFactory.set(idKKI, "\u30AD");
kanaFactory.set(idKKU, "\u30AF");
kanaFactory.set(idKKE, "\u30B1");
kanaFactory.set(idKKO, "\u30B3");
kanaFactory.set(idKSA, "\u30B5");
kanaFactory.set(idKSI, "\u30B7");
kanaFactory.set(idKSU, "\u30B9");
kanaFactory.set(idKSE, "\u30BB");
kanaFactory.set(idKSO, "\u30BD");
kanaFactory.set(idKTA, "\u30BF");
kanaFactory.set(idKTI, "\u30C1");
kanaFactory.set(idKTU, "\u30C4");
kanaFactory.set(idKTE, "\u30C6");
kanaFactory.set(idKTO, "\u30C8");

// TODO : vérifier les order pour les dakuten et handakuten
// TODO : générer le title comme les romajis avec des espaces

export function groupSyllablesInAlphabets():Array<Alphabet> {
    let alphabets:Array<Alphabet> = [];

    alphabets = [
        new Alphabet("hiragana"),
        new Alphabet("katakana"),
    ];

    return alphabets;
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
    ];

    return lessons;
}
