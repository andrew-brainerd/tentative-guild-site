import React from 'react';
import styles from './Schedule.module.scss';

const Schedule = () => {
  return (
    <div className={styles.schedule}>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=dqjne4hjpnkuankuf00csaph80%40group.calendar.google.com&ctz=America%2FDetroit"
        width="90%"
        height="600"
        frameBorder="0"
        scrolling="auto"
      ></iframe>
    </div>
  );
};

export default Schedule;
