import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './Header.module.scss';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <div className={styles.navigation}>
        {routes.map(route => (
          <Link
            key={route.path}
            to={route.path}
            className={[
              styles.navItem,
              route.canSelect && pathname === route.path ? styles.selected : ''
            ].join(' ')}
          >
            {route.icon || route.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
