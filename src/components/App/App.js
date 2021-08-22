import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../Header/Header';
import Officers from '../Officers/Officers';
import Schedule from '../Schedule/Schedule';
import Home from '../Home/Home';
import styles from './App.module.scss';

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div className={styles.app}>
        <Header />
        <Switch>
          <Route path="/officers" exact>
            <Officers />
          </Route>
          <Route path="/schedule" exact>
            <Schedule />
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
