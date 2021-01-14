import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authReducer from './authReducer';

export default combineReducers({
  product: productReducer,
  auth: authReducer,
});
