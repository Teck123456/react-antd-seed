import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import Home from '../components/Home/Home';
import Menus from '../components/Menus/Menus';
import NotFound from '../components/NotFound';
import IndexLayout from '../layouts/IndexLayout/IndexLayout';
const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={IndexLayout} >
    	<IndexRoute component={Home} />
    	<Route path="/menus" component={Menus} />
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
