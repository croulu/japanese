import {Syllable} from "./Syllable";

export class Lesson {
    id: string;
    syllables:Array<Syllable>;
    title:string;
    order: number;

    constructor(syllables:Syllable[], title:string, order:number) {
        this.id = "";
        this.syllables = syllables;
        this.title = title;
        this.order = order;
    }

}
