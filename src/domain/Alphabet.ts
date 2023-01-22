import {Lesson} from "./Lesson";

export class Alphabet {
    name:string;
    lessons:Array<Lesson>;

    constructor(name:string) {
        this.name = name;
        this.lessons = [];
    }

}
