import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {HomeMenu} from "./Home/HomeMenu";
import {HomeHero} from "./Home/HomeHero";

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeMenu/>} />
                <Route path="/hero" element={<HomeHero/>} />
                <Route path="/practice" element={<div>practice</div>} />
            </Routes>
        </Router>
    );
};
