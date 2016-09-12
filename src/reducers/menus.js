import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';
const menus = handleActions({
  	['menus/get'](state){
  		return {...state,loading:true}
  	},
  	['menus/get/success'](state,action){
  		return { ...state, list: action.payload, loading: false, };
  	}
},{
  list:[],
  loading:false
});


export default menus;