import React, { useState } from 'react';
import DiscordLink from '../DiscordLink/DiscordLink';
import SuggestionForm from '../SuggestionForm/SuggestionForm';
import JoinForm from '../JoinForm/JoinForm';
import suggestionImg from '../../img/suggestion.svg';
import joinImg from '../../img/join.svg';
import styles from './Contact.module.scss';

const Contact = () => {
  const [isShowingSuggetionBox, showSuggestionBox] = useState(false);
  const [isShowingJoinGuild, showJoinGuild] = useState(false);

  return (
    <div className={styles.content}>
      <h1>Contact Us</h1>
      <div className={styles.contact}>
        <h3>Always feel free to message any of our officers in-game or through the guild <DiscordLink /></h3>
        <div className={styles.contactOptions}>
          <div
            className={[
              styles.button,
              isShowingSuggetionBox ? styles.selected : ''
            ].join(' ')}
            onClick={() => {
              showSuggestionBox(true);
              showJoinGuild(false);
            }}>
            <img src={suggestionImg} alt="Suggestion Box" />
            Suggestion Box
          </div>
          <div
            className={[
              styles.button,
              isShowingJoinGuild ? styles.selected : ''
            ].join(' ')}
            onClick={() => {
              showJoinGuild(true);
              showSuggestionBox(false);
            }}>
            <img src={joinImg} alt="Join Guild" />
            Join Us
          </div>
        </div>
        {isShowingSuggetionBox && (
          <>
            <hr />
            <div className={styles.suggestionBox}>
              <SuggestionForm />
            </div>
          </>
        )}
        {isShowingJoinGuild && (
          <>
            <hr />
            <div className={styles.joinGuild}>
              <JoinForm />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
