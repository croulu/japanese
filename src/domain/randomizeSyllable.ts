import {Syllable} from "./Syllable";

export function randomizeSyllable(syllables:Array<Syllable>):Syllable {
    return syllables[Math.floor(Math.random() * syllables.length)];
}
