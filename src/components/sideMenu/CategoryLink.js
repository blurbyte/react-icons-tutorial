import React, {PropTypes} from 'react';

const styles = require('./CategoryLink.css');

const CategoryLink = ({children}) => (
  <a className={styles['link-active']} href="#">
    <div className={styles.wrapper}>{children}</div>
  </a>
);

CategoryLink.propTypes = {
  children: PropTypes.object.isRequired
};

export default CategoryLink;
