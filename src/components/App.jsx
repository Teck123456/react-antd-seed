import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './App.less';
//====
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AsideMenu from './AsideMenu/AsideMenu';


const App = ({location,children}) => {
 
  return (
    <div className={styles.root}>
      <AsideMenu />
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

App.propTypes = {

};

export default App;

