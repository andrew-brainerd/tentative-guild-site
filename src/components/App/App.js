import { React } from 'react';
import { useLocation, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import routes from '../../constants/routes';
import Header from '../Header/Header';
import styles from './App.module.scss';

const App = () => {
  const location = useLocation();

  console.log('Key: ', location.key);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames='fadeAnimation'
                unmountOnExit
              >
                <div className='fadeAnimation'>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </div>
  );
};

export default App;
