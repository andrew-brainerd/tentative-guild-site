import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import homeIcon from '../../img/home.svg';
import styles from './Header.module.scss';

const Header = () => {
  const { pathname } = useLocation();

  console.log('Path', pathname);

  return (
    <header>
      <div className={styles.navigation}>
        <Link
          to="/"
          className={styles.navItem}
        >
          <img src={homeIcon} alt="Home" />
        </Link>
        <Link
          to="/officers"
          className={[
            styles.navItem,
            pathname === '/officers' ? styles.selected : ''
          ].join(' ')}
        >
          Officers
        </Link>
        <Link
          to="/schedule"
          className={[
            styles.navItem,
            pathname === '/schedule' ? styles.selected : ''
          ].join(' ')}
        >
          Raid Schedule
        </Link>
      </div>
    </header>
  );
};

export default Header;
