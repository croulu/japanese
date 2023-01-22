import {Syllable} from "./Syllable";
import {mappingSyllableKanaRomaji} from "./Syllable.factory";
import {Alphabet} from "./Alphabet";

export class SyllableKana extends Syllable {

    unicode:string;
    idSyllable:string;

    constructor(alphabet:Alphabet, consonant:string, vowel:string) {
        super(alphabet, consonant, vowel);
        this.idSyllable = super.calculateIdSyllable();
        this.unicode = this.findWithSyllableId();
    }

    display():string {
        return this.unicode;
    }

    findWithSyllableId():string {
        const kanaFound:string[]|undefined = mappingSyllableKanaRomaji.find(element => element[0] === this.idSyllable);
        let kana: string = "";
        if (kanaFound) {
            kana = kanaFound[1];
        }
        return kana;
    }

}
