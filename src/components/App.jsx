import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Todos from './Todos/Todos';
import MainLayout from '../layouts/MainLayout/MainLayout';

import IndexLayout from '../layouts/IndexLayout/IndexLayout';

const App = ({dispatch,collapse,location}) => {
  const onCollapseChange = ()=>{
  	dispatch({
      type: 'layout/change',
      collapse: !collapse,
    });
  }
  return (
   /* <MainLayout>
      <Todos location={location} />
    </MainLayout>*/
    <IndexLayout collapse={collapse} onCollapseChange={onCollapseChange.bind(this)}>
    	<Todos location={location}></Todos>
    </IndexLayout>
  );
};

App.propTypes = {
};


function mapStateToProps(state) {
  return {
    collapse:state.layout.collapse,
  };
}

export default connect(mapStateToProps)(App);

