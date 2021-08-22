import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Officers from '../Officers/Officers';
import styles from './App.module.scss';

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div className={styles.app}>
        <Header />
        <Switch>
          <Route path="/officers">
            <Officers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
