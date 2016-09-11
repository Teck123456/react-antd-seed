import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const layout = handleActions({
	['layout/change'](state,action) {
    	return { ...state, collapse: action.collapse, };
  	}
},{
  collapse: false //初始化state
});


export default layout;