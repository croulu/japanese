import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {HomeHero} from "./Home/HomeHero";
import {HomeMenu} from "./Home/HomeMenu";

export const Routing = () => {
    return (
        <Router>
            <Route path='/'>
                <HomeMenu />
                <HomeHero />
            </Route>
            <Route path='/practice'>
                <div>toto</div>
            </Route>
        </Router>
    );
};
