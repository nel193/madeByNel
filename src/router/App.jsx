import React from 'react';
import Home from '../containers/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import '../assets/styles/containers/App.scss'

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default App