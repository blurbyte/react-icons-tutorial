import React from 'react';

//components
import Header from './common/Header';
import SideMenu from './sideMenu/SideMenu';
import ContentPage from './content/ContentPage';

const styles = require('./App.css');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.wrapper}>
          <SideMenu />
          <ContentPage />
        </div>
      </div>
    );
  }
}

export default App;
