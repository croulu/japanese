import {Syllable} from "./Syllable";
import {Alphabet} from "./Alphabet";

export class Lesson {
    id: string;
    alphabet:Alphabet;
    syllables:Array<Syllable>;
    title:string;
    order: number;

    constructor(syllables:Syllable[], title:string, order:number) {
        this.syllables = syllables;
        this.title = title;
        this.order = order;
        this.id = this.calculateId();
        this.alphabet = syllables[0].alphabet;
        // TODO alphabet à calculer pour toutes les syllables de la leçon au lieu de prendre le premier arbitrairement,
        // ici toutes les syllables de la leçon sont du même alphabet
    }

    calculateId () {
        return this.id = this.title.split(" ").join("");
    };

}
