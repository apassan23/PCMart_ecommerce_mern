import {
  ADD_ITEM_WISHLIST,
  DELETE_ITEM_WISHLIST,
  CLEAR_WISHLIST,
  GET_WISHLIST,
  SAVE_ITEMS_WISHLIST,
} from './types';
import axios from 'axios';

export const getItems = (email) => (dispatch) => {
  axios
    .get('/api/wishlist', {
      'Content-Type': 'application/json',
      params: { email },
    })
    .then((res) => dispatch({ type: GET_WISHLIST, payload: res.data }))
    .catch((err) => {
      if (err.response.status === 404)
        dispatch(saveWishlist({ email, items: [] }));
      else throw err;
    });
};

export const addItem = (payload) => (dispatch) => {
  axios
    .post('/api/wishlist/add', payload, { 'Content-Type': 'application/json' })
    .then((res) => dispatch({ type: ADD_ITEM_WISHLIST, payload }))
    .catch((err) => console.log(err));
};

export const deleteItem = (payload) => (dispatch) => {
  axios
    .post('/api/wishlist/delete', payload, {
      'Content-Type': 'application/json',
    })
    .then((res) => dispatch({ type: DELETE_ITEM_WISHLIST, payload }))
    .catch((err) => console.log(err));
};

export const saveWishlist = (list) => (dispatch) => {
  axios
    .post('/api/wishlist', list, { 'Content-Type': 'application/json' })
    .then((res) => dispatch({ type: CLEAR_WISHLIST }))
    .catch((err) => {
      if (err.response.data.code === 2)
        axios
          .post('/api/wishlist/update', list, {
            'Content-Type': 'application/json',
          })
          .then((res) => dispatch({ type: CLEAR_WISHLIST }))
          .catch((err) => {
            throw err;
          });
      else throw err;
    });
};

export const clear = () => (dispatch) => {
  dispatch({ type: CLEAR_WISHLIST });
};

export const saveItems =
  ({ email, items }) =>
  (dispatch) => {
    Promise.all(
      items.map((itemID) => axios.get(`/api/products/product/${itemID}`))
    )
      .then((results) =>
        dispatch({
          type: SAVE_ITEMS_WISHLIST,
          payload: { email, products: results.map((result) => result.data) },
        })
      )
      .catch((err) => console.log(err));
  };
