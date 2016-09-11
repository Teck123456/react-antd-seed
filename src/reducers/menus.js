import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';
const menus = handleActions({
  	['menus/get'](state,action){
  		return {...state,loading:true}
  	},
  	['menus/get/success'](state,action){
  		return { ...state, menus: action.payload, loading: false, };
  	}
},{
  menus:[],
  loading:false
});


export default menus;