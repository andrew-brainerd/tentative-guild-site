import React from 'react';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Officers from '../components/Officers/Officers';
import Schedule from '../components/Schedule/Schedule';
import Loot from '../components/Loot/Loot';
import Addons from '../components/Addons/Addons';
import Contact from '../components/Contact/Contact';
import homeIcon from '../img/home.svg';

export default isMobile => {
  return [
    {
      path: '/',
      name: 'Home',
      Component: Home,
      icon: <img src={homeIcon} alt="Home" />,
      canSelect: isMobile
    },
    {
      path: '/about',
      name: 'About Us',
      Component: About,
      canSelect: true
    },
    {
      path: '/leadership',
      name: 'Leadership',
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
    },
    {
      path: '/addons',
      name: 'Addons',
      Component: Addons,
      canSelect: true
    },
    {
      path: '/contact',
      name: 'Contact Us',
      Component: Contact,
      canSelect: true
    }
  ];
};
