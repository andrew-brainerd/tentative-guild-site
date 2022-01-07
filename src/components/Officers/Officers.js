import React from 'react';
import officerList from '../../constants/officers';
import styles from './Officers.module.scss';

const Officers = () => {
  return (
    <div className={styles.content}>
      <h1>Our Leadership</h1>
      <div className={styles.officers}>
        {officerList.map(officer => {
          return (
            <div key={officer.name}>
              <div className={styles.officer}>
                <h2>{officer.name}</h2>
                <div className={styles.portrait}>
                  <img src={officer.img} alt={officer.name} />
                </div>
                <h3>{officer.title}</h3>
                <h3>{officer.race} {officer.class}</h3>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Officers;
