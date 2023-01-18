import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {HomeHero} from "./Home/HomeHero";

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeHero />} />
                <Route path="/practice" element={<HomeHero />} />
            </Routes>
        </Router>
    )
};