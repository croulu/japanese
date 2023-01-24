import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Menu} from "./Home/Menu";
import {Main} from "./Home/Main";
import {allAlphabets} from "../domain/Syllable.factory";
import {Alphabet} from "../domain/Alphabet";
import {AlphabetsToLearn} from "./Learn/AlphabetsToLearn";
import {AlphabetsToPlay} from "./PlayMenu/AlphabetsToPlay";
import {PlayLesson} from "./PlayLesson/PlayLesson";
import {Lesson} from "../domain/Lesson";
import {Syllable} from "../domain/Syllable";

export const Routing = () => {
    let  alphabets:Array<Alphabet> = allAlphabets;

    const alphabetForInit:Alphabet = new Alphabet("hiragana");
    const lessonForInit:Lesson = new Lesson([
            new Syllable(alphabetForInit, '', 'a'),
            new Syllable(alphabetForInit, '', 'i'),
            new Syllable(alphabetForInit, '', 'u'),
            new Syllable(alphabetForInit, '', 'e'),
            new Syllable(alphabetForInit, '', 'o'),
        ], 'a i u e o', 1);

    const [lesson, setLesson] = useState<Lesson>(lessonForInit);
    const [alphabet, setAlphabet] = useState<Alphabet>(alphabetForInit);
    const [level, setLevel] = useState<string>("");

    const handleLesson = (lesson:Lesson) => {
        if (level === "easy")
            setLesson(lesson);
        else
            setLesson(lesson);
    }

    const handleLevel = (level:string) => {
        setLevel(level);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Menu handleLevel={handleLevel} />
                        <Main key={"main"} handleLevel={handleLevel} />
                    </>
                } />
                <Route path="/practice" element={
                    <>
                        <Menu handleLevel={handleLevel} />
                        <AlphabetsToPlay key={"alphabetsToPlay"} alphabets={alphabets} level={level}
                        onLessonChange={handleLesson}/>
                    </>
                } />
                <Route path="/play" element={
                    <>
                        <Menu handleLevel={handleLevel} />
                        <PlayLesson key={"lessonToPlay"} lesson={lesson} level={level} />
                    </>
                } />
                <Route path="/alphabets" element={
                    <>
                        <Menu handleLevel={handleLevel} />
                        <AlphabetsToLearn key={"alphabetsToLearn"} alphabets={alphabets} />
                    </>
                } />
            </Routes>
        </Router>
    );
};


