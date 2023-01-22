import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Menu} from "./Home/Menu";
import {Main} from "./Home/Main";
import {allAlphabets} from "../domain/Syllable.factory";
import {Alphabet} from "../domain/Alphabet";

export const Routing = () => {
    let  alphabets:Array<Alphabet> = allAlphabets;

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Menu/>
                        <Main
                            key={"qqq"}
                            alphabets={alphabets}
                        />
                    </>
                }
                />
            </Routes>
        </Router>
    );
};

/*
                <Route path="/practice" element={<div>practice</div>} />
                <Route path="/alphabets" element={<Alphabets key={"fff"}
                                                             lessons={lessons}/>} />
 */