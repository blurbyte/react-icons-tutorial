import React from 'react';

//components
import {BlurbyteLogo} from './Icons';

const styles = require('./Header.css');

const Header = () => (
  <header className={styles.banner} role="banner">
    <span className={styles.logo}><BlurbyteLogo /></span>
    <p className={styles.description}>React SVG Icons</p>
  </header>
);

export default Header;
