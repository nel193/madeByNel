import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../assets/styles/containers/App.scss';
import Layout from '../components/Common/Layout';
import About from '../containers/About';
import Cv from '../containers/Cv';
import Data from '../containers/Data';
import FontanaDev from '../containers/FontanaDev';
import Home from '../containers/Home';
import Portfolio from '../containers/Portfolio';

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/cv' component={Cv} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/fontana' component={FontanaDev} />
          <Route exact path='/data' component={Data} />
        </Switch>
      </Layout>
    </HashRouter>
  );
};

export default App;
