import {BrowserRouter as Router, Route} from 'react-router-dom';

import {HomeHero} from "./Home/HomeHero";

export const Routing = () => {
    return (
        <Router>
            <Route path='/'>
                <HomeHero />
            </Route>
            <Route path='/practice'>
                <div>toto</div>
            </Route>
        </Router>
    );
};
