import userReducer from './userReducer';
import productReducers from './productReducers';
import { combineReducers } from 'redux';


export default combineReducers({ user: userReducer,product: productReducers });
