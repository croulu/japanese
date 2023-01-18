import {BrowserRouter as Router, Route} from 'react-router-dom';

import {HomeHero} from "./component/Home/HomeHero";

export const Routing = () => {
    return (
        <Router>
            <Route path='/'>
                <HomeHero />
            </Route>
        </Router>
    );
}
