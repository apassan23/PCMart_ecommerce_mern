import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import errorReducer from './errorReducer';
import wishlistReducer from './wishlistReducer';

export default combineReducers({
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  error: errorReducer,
  wishlist: wishlistReducer,
});
