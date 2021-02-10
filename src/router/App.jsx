import React from 'react';
import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../containers/Home'
import About from '../containers/About'
import Cv from '../containers/Cv'
import Portfolio from '../containers/Portfolio'
import FontanaDev from '../containers/FontanaDev'



import '../assets/styles/containers/App.scss'

const App = () => {
    return(
        <HashRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/cv" component={Cv} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/fontana" component={FontanaDev} />
                </Switch>
            </Layout>
        </HashRouter>
    )
}

export default App