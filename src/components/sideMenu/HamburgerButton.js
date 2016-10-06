import React from 'react';

//icon
import {HamburgerIcon} from '../common/Icons';

const styles = require('./HamburgerButton.css');

const HamburgerButton = () => (
  <button className={styles.button}><span className={styles.wrapper}><HamburgerIcon /></span></button>
);

export default HamburgerButton;
