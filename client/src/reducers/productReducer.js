import {
  GET_ALL_PRODUCTS,
  SET_PRODUCT,
  GET_PRODUCT,
  PRODUCTS_LOADED,
  PRODUCTS_LOADING,
  SORT_PRODUCTS,
} from '../actions/types';

import lodash from 'lodash';

const initialState = {
  products: [],
  product_clicked: {},
  loading: false,
  sortParameter: '',
  filters: {},
};

const getFilters = (products) => {
  // TODO: Optimize this section
  let keys = Object.keys(products[0].details);
  let options = {};

  keys.forEach((key) => {
    let unmangledKey = key.replace('_', ' ');
    options[unmangledKey] = lodash.sortBy(
      lodash.uniq(products.map((product) => product.details[key])),
      (x) => parseInt(x) || parseFloat(x) || x
    );
  });

  return options;
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filters: getFilters(action.payload),
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

    case SORT_PRODUCTS:
      return {
        ...state,
        sortParameter: action.payload,
        products: [
          ...state.products.sort(
            (x, y) => x[action.payload] - y[action.payload]
          ),
        ],
      };

    default:
      return state;
  }
}
