
export class Syllable {

    alphabet:string;
    consonant:string;
    vowel:string;

    constructor (alphabet:string, consonant:string, vowel:string) {
        this.alphabet = alphabet;
        this.consonant = consonant;
        this.vowel = vowel;
    }

    isTheSame(syllable:Syllable):boolean {
        return (this.alphabet === syllable.alphabet &&
            this.consonant === syllable.consonant &&
            this.vowel === syllable.vowel )
    }
}