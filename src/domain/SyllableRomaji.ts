import {Syllable} from "./Syllable";
import {romajiFactory} from "./Syllable.factory";

export class SyllableRomaji extends Syllable {

    text:string;
    idSyllable:string;

    constructor(alphabet:string, consonant:string, vowel:string) {
        super(alphabet, consonant, vowel);
        this.idSyllable = super.calculateIdSyllable();
        this.text = this.findRomajiWithSyllableId();
    }

    display():string {
        return this.text;
    }

    findRomajiWithSyllableId():string {
        let romaji:string;
        const isFound:boolean = romajiFactory.has(this.idSyllable);
        if (isFound)
            romaji = romajiFactory.get(this.idSyllable);
        else
            romaji = "";
        return romaji;
    }

}
