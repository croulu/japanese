import {Alphabet} from "./Alphabet";

export class Syllable {

    alphabet:Alphabet;
    consonant:string;
    vowel:string;
    id:string;

    constructor (alphabet:Alphabet, consonant:string, vowel:string) {
        this.alphabet = alphabet;
        this.consonant = consonant;
        this.vowel = vowel;
        this.id = this.calculateIdSyllable();
    }

    isTheSame(syllable:Syllable):boolean {
        return (this.alphabet === syllable.alphabet &&
            this.consonant === syllable.consonant &&
            this.vowel === syllable.vowel )
    }

    calculateIdSyllable():string {
        return (this.alphabet + this.consonant + this.vowel)
    };

}