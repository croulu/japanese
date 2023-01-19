import {Syllable} from "./Syllable";

export class SyllableKana extends Syllable {

    unicode:string;

    constructor(alphabet:string, consonant:string, vowel:string) {
        super(alphabet, consonant, vowel);
        this.unicode = getUnicode();
    }

    display():string {
        return this.unicode;
    }

}

function getUnicode():string {
    return "";
}