import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Todos from './Todos/Todos';
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

