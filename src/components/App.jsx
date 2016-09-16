import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MainLayout from '../layouts/MainLayout/MainLayout';

import IndexLayout from '../layouts/IndexLayout/IndexLayout';

const App = ({location}) => {
  /*const onCollapseChange = ()=>{
  	dispatch({
      type: 'layout/change',
      collapse: !collapse,
    });
  }*/
  return (
   /* <MainLayout>
      <Todos location={location} />
    </MainLayout>*/
    <IndexLayout>
    	
    </IndexLayout>
  );
};

App.propTypes = {
};

export default App;

