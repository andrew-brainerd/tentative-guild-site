import React from 'react';
import Home from '../components/Home/Home';
import Officers from '../components/Officers/Officers';
import Schedule from '../components/Schedule/Schedule';
import Loot from '../components/Loot/Loot';
import homeIcon from '../img/home.svg';

export default [
  {
    path: '/',
    name: 'Home',
    Component: Home,
    icon: <img src={homeIcon} alt="Home" />,
    canSelect: false
  },
  {
    path: '/officers',
    name: 'Officers',
    Component: Officers,
    canSelect: true
  },
  {
    path: '/schedule',
    name: 'Schedule',
    Component: Schedule,
    canSelect: true
  },
  {
    path: '/loot',
    name: 'Loot System',
    Component: Loot,
    canSelect: true
  }
];
