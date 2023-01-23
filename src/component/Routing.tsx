import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Menu} from "./Home/Menu";
import {Main} from "./Home/Main";
import {allAlphabets} from "../domain/Syllable.factory";
import {Alphabet} from "../domain/Alphabet";
import {AlphabetsToLearn} from "./Learn/AlphabetsToLearn";
import {AlphabetsToPlay} from "./PlayMenu/AlphabetsToPlay";
import {PlayItemStart} from "./PlayItem/PlayItemStart";
import {Lesson} from "../domain/Lesson";
import {Syllable} from "../domain/Syllable";

export const Routing = () => {
    let  alphabets:Array<Alphabet> = allAlphabets;

    const alphabetForTest:Alphabet = new Alphabet("hiragana");
    const lessonForTest:Lesson = new Lesson([
            new Syllable(alphabetForTest, 't', 'a'),
            new Syllable(alphabetForTest, 't', 'i'),
            new Syllable(alphabetForTest, 't', 'u'),
            new Syllable(alphabetForTest, 't', 'e'),
            new Syllable(alphabetForTest, 't', 'o'),
        ], 'ta chi tsu te to', 4);
    const levelForTest:string = "difficult";

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Menu />
                        <Main key={"main"}
                        />
                    </>
                } />
                <Route path="/practice" element={
                    <>
                        <Menu />
                        <AlphabetsToPlay
                            key={"alphabetsToPlay"}
                            alphabets={alphabets}
                        ></AlphabetsToPlay>
                    </>
                } />
                <Route path="/play" element={
                    <>
                        <Menu />
                        <PlayItemStart
                            key={"lessonToPlay"}
                            lesson={lessonForTest}
                            level={levelForTest}
                        ></PlayItemStart>
                    </>
                } />
                <Route path="/alphabets" element={
                    <>
                        <Menu />
                        <AlphabetsToLearn key={"alphabetsToLearn"}
                                          alphabets={alphabets} />
                    </>
                } />
            </Routes>
        </Router>
    );
};


