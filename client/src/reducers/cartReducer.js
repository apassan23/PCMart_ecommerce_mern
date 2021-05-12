import {
  CART_ADD_ITEM,
  CART_CLEAR,
  CART_DELETE_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from '../actions/types';

const initialState = {
  products: localStorage.getItem('cart_products')
    ? JSON.parse(localStorage.getItem('cart_products'))
    : [],
  totalItems: localStorage.getItem('cart_totalItems')
    ? parseInt(localStorage.getItem('cart_totalItems'))
    : 0,
  totalPrice: localStorage.getItem('cart_totalPrice')
    ? parseInt(localStorage.getItem('cart_totalPrice'))
    : 0,
};

const increaseQty = (products, id) => {
  return products.map((product) => {
    if (product._id === id) product.qty += 1;
    return product;
  });
};

const addOrIncQty = (products, item) => {
  if (
    products.length !== 0 &&
    products.map((product) => product._id).includes(item._id)
  )
    return increaseQty(products, item._id);
  else return [...products, item];
};

export default function cartReducer(state = initialState, action) {
  let reducedState = {};
  switch (action.type) {
    case CART_ADD_ITEM:
      console.log(state.products.map((product) => product._id));
      reducedState = {
        ...state,
        products: addOrIncQty(state.products, action.payload),
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.cost,
      };
      break;

    case CART_DELETE_ITEM:
      reducedState = {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload.id
        ),
        totalItems: state.totalItems - 1,
        totalPrice:
          state.totalPrice === 0 ? 0 : state.totalPrice - action.payload.cost,
      };
      break;

    case INCREASE_QUANTITY:
      reducedState = {
        ...state,
        products: increaseQty(state.products, action.payload.id),
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.cost,
      };
      break;

    case DECREASE_QUANTITY:
      let qty = 0;
      reducedState = {
        ...state,
        products: state.products.map((product) => {
          if (product._id === action.payload.id) {
            qty = product.qty;
            product.qty = product.qty === 1 ? 1 : product.qty - 1;
            return product;
          } else return product;
        }),
        totalItems: state.totalItems === 1 ? 1 : state.totalItems - 1,
        totalPrice:
          qty === 1 ? state.totalPrice : state.totalPrice - action.payload.cost,
      };
      break;

    case CART_CLEAR:
      reducedState = {
        ...state,
        products: [],
        totalItems: 0,
        totalPrice: 0,
      };
      break;
    default:
      reducedState = state;
  }
  localStorage.setItem('cart_products', JSON.stringify(reducedState.products));
  localStorage.setItem('cart_totalItems', reducedState.totalItems);
  localStorage.setItem('cart_totalPrice', reducedState.totalPrice);
  return reducedState;
}
