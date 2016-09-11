import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Menu, Breadcrumb, Icon } from 'antd';
import styles from './MainLayout.less';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.normal}>
      <div className={styles.content}>
        <div className={styles.side}>
          <div className={styles.logo}>refordom</div>
          <Link to="/">All</Link><br />
          <Link to="/actived">Actived</Link><br />
          <Link to="/completed">Completed</Link><br />
          <Link to="/404">404</Link><br />
        </div>
        <div className={styles.main}>
          <div className={styles.head}>
            <Icon type="bars" />
          </div>
          {children}
        </div>
      </div>
      <div className={styles.footer}>
        Built with react, react-router, redux, redux-saga, ant-tool, css-modules, antd...
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
