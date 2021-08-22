import React from 'react';
import officerList from '../../constants/officers';
import styles from './Officers.module.scss';

const Officers = () => {
  return (
    <div className={styles.content}>
      <h1>Our Officers</h1>
      <div className={styles.officers}>
        {officerList.map(officer => {
          return (
            <>
              <div className={styles.officer} key={officer.name}>
                <div className={styles.portrait}>
                  <img src={officer.img} alt={officer.name} />
                </div>
                <h2>{officer.name}</h2>
                <h3>{officer.race} {officer.class}</h3>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Officers;
