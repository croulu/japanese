import {Syllable} from "./Syllable";

export function randomizeSyllables(syllables:Array<Syllable>):Array<Syllable> {
    return syllables.sort(() => Math.random() - 0.5);
}
