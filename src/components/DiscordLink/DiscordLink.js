import React from 'react';
import { string } from 'prop-types';
import { guildDiscordLink } from '../../constants/links';

const DiscordLink = ({ text }) => (
  <a
    href={guildDiscordLink}
    target="_blank"
    rel="noreferrer"
  >
    {text || 'Discord'}
  </a>
);

DiscordLink.propTypes = {
  text: string
};

export default DiscordLink;
