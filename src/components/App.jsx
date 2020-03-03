import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './Search.jsx';
import DisplayResults from './DisplayResults.jsx';
import IndividualResults from './IndividualResults.jsx';

const App = () => (
    <Router>
        <Switch>
            <Route path='/' exact={true} component={Search}/>
            <Route path='/results' exact={true} component={DisplayResults}/>
            <Route path='/IndividualResults/:id' exact={true} component={IndividualResults}/>
        </Switch>
    </Router>
);

export default App;