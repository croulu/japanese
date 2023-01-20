import {Syllable} from "./Syllable";
import {kanaFactory} from "./Syllable.factory";

export class SyllableKana extends Syllable {

    unicode:string;
    idSyllable:string;

    constructor(alphabet:string, consonant:string, vowel:string) {
        super(alphabet, consonant, vowel);
        this.idSyllable = super.calculateIdSyllable();
        this.unicode = this.findKanaWithSyllableId();
    }

    display():string {
        return this.unicode;
    }

    findKanaWithSyllableId():string {
        let kana:string;
        const isFound:boolean = kanaFactory.has(this.idSyllable);
        if (isFound)
            kana = kanaFactory.get(this.idSyllable);
        else
            kana = "";
        return kana;
    }

}
