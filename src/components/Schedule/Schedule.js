import React, { useState, useEffect } from 'react';
import styles from './Schedule.module.scss';

const Schedule = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
    <div className={styles.content}>
      <h1>Our Raid Schedule</h1>
      <div className={styles.schedule}>
        <h2 className={isLoading ? '' : styles.hidden}>Loading...</h2>
        <iframe
          className={isLoading ? styles.hidden : ''}
          src="https://calendar.google.com/calendar/embed?src=dqjne4hjpnkuankuf00csaph80%40group.calendar.google.com&ctz=America%2FDetroit"
          width="90%"
          height="600"
          frameBorder="0"
          scrolling="auto"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default Schedule;
