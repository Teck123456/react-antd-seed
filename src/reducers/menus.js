import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';
const menus = handleActions({
  	['menus/get'](state){
  		return {...state,loading:true}
  	},
  	['menus/get/success'](state,action){
  		return { ...state, list: action.payload, loading: false,};
  	},
  	['menus/select/change'](state,action){
  		return {...state,selectedKey:action.payload};
  	},
    ['menus/open/change'](state,action){
      return {...state,openKeys:[...state.openKeys,action.payload]};
    },
    ['menus/close/change'](state,action){

    }
},{
  list:[],
  selectedKey:"home",
  openKeys:["home"],
  loading:false
});


export default menus;