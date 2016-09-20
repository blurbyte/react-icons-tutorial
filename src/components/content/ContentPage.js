import React from 'react';

const styles = require('./ContentPage.css');

const ContentPage = () => (
  <div className={styles.wrapper}>
    <article className={styles.tile} role="main">
      <div className={styles['tile-border-wrapper']}>
      <section>
        <h1 className={styles['main-header']}>Welcome to React SVG Icons tutorial</h1>
        <p className={styles['main-paragraph']}>SVG images look equally good on all devices, despite of resolution. React helps with organizing them in a handy library.</p>
        <p className={styles['main-paragraph']}>Be free to use these icons in your own projects.</p>
      </section>
      <section className={styles['content-section']}>
        <h2 className={styles['secondary-header']}>Check it out!</h2>
        <ul className={styles['social-links-list']}>
          <li>Check my other projects on <a className={styles['text-link']} target="_blank" href="https://github.com/blurbyte">GitHub</a></li>
          <li>Contact me on <a className={styles['text-link']} target="_blank" href="https://twitter.com/blurbyte">Twitter</a></li>
          <li>Visit <a className={styles['text-link']} target="_blank" href="http://blurbyte.com/">blurbyte.com</a></li>
        </ul>
      </section>
      </div>
    </article>
  </div>
);

export default ContentPage;
