import {Syllable} from "./Syllable";
import {mappingSyllableKanaRomaji} from "./Syllable.factory";
import {Alphabet} from "./Alphabet";

export class SyllableRomaji extends Syllable {

    text:string;
    idSyllable:string;

    constructor(alphabet:Alphabet, consonant:string, vowel:string) {
        super(alphabet, consonant, vowel);
        this.idSyllable = super.calculateIdSyllable();
        this.text = this.findWithSyllableId();
    }

    display():string {
        return this.text;
    }

    findWithSyllableId():string {
        const romajiFound:string[]|undefined = mappingSyllableKanaRomaji.find(element => element[0] === this.idSyllable);
        let kana: string = "";
        if (romajiFound) {
            kana = romajiFound[2];
        }
        return kana;
    }

}
