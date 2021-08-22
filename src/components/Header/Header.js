import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.navigation}>
        <Link
          to="/"
          className={styles.navItem}
        >
          Home
        </Link>
        <Link
          to="/officers"
          className={styles.navItem}
        >
          Officers
        </Link>
        <Link
          to="/schedule"
          className={styles.navItem}
        >
          Raid Schedule
        </Link>
      </div>
    </header>
  );
};

export default Header;
