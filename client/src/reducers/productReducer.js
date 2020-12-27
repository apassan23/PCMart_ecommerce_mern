import {
  GET_ALL_PRODUCTS,
  SET_PRODUCT,
  GET_PRODUCT,
  PRODUCTS_LOADED,
  PRODUCTS_LOADING,
} from '../actions/types';

const initialState = {
  products: [],
  product_clicked: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SET_PRODUCT:
    case GET_PRODUCT:
      return {
        ...state,
        product_clicked: action.payload,
      };

    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case PRODUCTS_LOADED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
