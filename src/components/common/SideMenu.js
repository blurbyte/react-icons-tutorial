import React from 'react';

//components
import HamburgerButton from './HamburgerButton';
import CategoryLink from './CategoryLink';

//icons
import {CodeIcon, DesignIcon, IdeasIcon, ResearchIcon, ChartsIcon, DocsIcon} from './Icons';

const styles = require('./SideMenu.css');

const SideMenu = () => (
  <div className={styles.wrapper}>
    <HamburgerButton />
    <nav>
      <ul className={styles['nav-links']}>
        <li><CategoryLink><CodeIcon /></CategoryLink></li>
        <li><CategoryLink><DesignIcon /></CategoryLink></li>
        <li><CategoryLink><IdeasIcon /></CategoryLink></li>
        <li><CategoryLink><ResearchIcon /></CategoryLink></li>
        <li><CategoryLink><ChartsIcon /></CategoryLink></li>
        <li><CategoryLink><DocsIcon /></CategoryLink></li>
      </ul>
    </nav>
  </div>
);

export default SideMenu;
