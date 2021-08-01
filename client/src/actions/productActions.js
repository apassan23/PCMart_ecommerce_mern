import {
  GET_ALL_PRODUCTS,
  SET_PRODUCT,
  GET_PRODUCT,
  PRODUCTS_LOADED,
  PRODUCTS_LOADING,
  SORT_PRODUCTS,
} from '../actions/types';

import axios from 'axios';

export const getAllProducts =
  (product_type = '') =>
  (dispatch) => {
    dispatch(productsLoading());
    axios.get(`/api/products/${product_type}`).then((res) => {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      });
      dispatch(productsLoaded());
    });
  };

export const setProduct = (product) => (dispatch) => {
  dispatch({
    type: SET_PRODUCT,
    payload: product,
  });
};

export const getProduct = (id) => (dispatch) => {
  dispatch(productsLoading());
  axios.get(`/api/products/product/${id}`).then((res) => {
    dispatch({ type: GET_PRODUCT, payload: res.data });
    dispatch(productsLoaded());
  });
};

export const productsLoading = () => (dispatch) => {
  dispatch({
    type: PRODUCTS_LOADING,
  });
};

export const productsLoaded = () => (dispatch) => {
  dispatch({
    type: PRODUCTS_LOADED,
  });
};

export const sortProducts = (parameter) => (dispatch) => {
  dispatch({
    type: SORT_PRODUCTS,
    payload: parameter,
  });
};
