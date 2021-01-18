import {
  CART_ADD_ITEM,
  CART_CLEAR,
  CART_DELETE_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from './types';

export const addItem = (product) => (dispatch) => {
  dispatch({
    type: CART_ADD_ITEM,
    payload: product,
  });
};

export const deleteItem = ({ _id, cost }) => (dispatch) => {
  dispatch({
    type: CART_DELETE_ITEM,
    payload: { id: _id, cost },
  });
};

export const increaseQty = ({ _id, cost }) => (dispatch) => {
  dispatch({
    type: INCREASE_QUANTITY,
    payload: { id: _id, cost },
  });
};

export const decreaseQty = ({ _id, cost }) => (dispatch) => {
  dispatch({
    type: DECREASE_QUANTITY,
    payload: { id: _id, cost },
  });
};

export const clear = () => (dispatch) => {
  dispatch({ type: CART_CLEAR });
};
