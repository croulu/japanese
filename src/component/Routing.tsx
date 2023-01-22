import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Menu} from "./Home/Menu";
import {Main} from "./Home/Main";
import {Alphabets} from "./Learn/Alphabets";
import {Lesson} from "../domain/Lesson";
import {groupLessonsInCatalog} from "../domain/Syllable.factory";
import {SyllableKana} from "../domain/SyllableKana";
import {SyllableRomaji} from "../domain/SyllableRomaji";

export const Routing = () => {
    const lessons:Array<Lesson> = groupLessonsInCatalog();
    let kanas:Array<string> = [];
    let romajis:Array<string> = [];

    lessons.forEach(lesson =>
        lesson.syllables.forEach(
            syllable => {
                //console.log(syllable.alphabet);
                const syllableKana = new SyllableKana(syllable.alphabet, syllable.consonant, syllable.vowel)
                const syllableRomaji = new SyllableRomaji(syllable.alphabet, syllable.consonant, syllable.vowel)
                kanas.push(syllableKana.display());
                romajis.push(syllableRomaji.display());
            }))

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Menu/>
                        <Main
                            key={"qqq"}
                            lessons={lessons} />
                    </>
                }
                />
                <Route path="/practice" element={<div>practice</div>} />
                <Route path="/alphabets" element={<Alphabets key={"fff"}
                                                             lessons={lessons}/>} />
            </Routes>
        </Router>
    );
};
