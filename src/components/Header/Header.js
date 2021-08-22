import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.navigation}>
        <div className={styles.navItem}>
          Officers
        </div>
      </div>
    </header>
  );
};

export default Header;
