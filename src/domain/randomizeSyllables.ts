import {Syllable} from "./Syllable";

export function randomizeSyllables(syllables:Array<Syllable>):Array<Syllable> {
    let currentIndex = syllables.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [syllables[currentIndex], syllables[randomIndex]] = [
            syllables[randomIndex], syllables[currentIndex]];
    }

    return syllables;
}
