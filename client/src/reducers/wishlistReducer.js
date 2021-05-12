import {
  ADD_ITEM_WISHLIST,
  DELETE_ITEM_WISHLIST,
  CLEAR_WISHLIST,
  GET_WISHLIST,
  SAVE_ITEMS_WISHLIST,
} from '../actions/types';

const initialState = {
  email: localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist')).email
    : '',
  items: localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist')).items
    : [],
  products: localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist')).products
    : [],
  isLoaded: localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist')).isLoaded
    : false,
};

export default function wishlistReducer(state = initialState, action) {
  let reducedState = {};
  switch (action.type) {
    case GET_WISHLIST:
      reducedState = { ...state, ...action.payload, isLoaded: true };
      break;

    case ADD_ITEM_WISHLIST:
      reducedState = {
        ...state,
        email: action.payload.email,
        items: [...state.items, action.payload.item],
      };
      break;

    case DELETE_ITEM_WISHLIST:
      reducedState = {
        ...state,
        email: action.payload.email,
        items: state.items.filter((id) => id !== action.payload.item),
      };
      break;

    case CLEAR_WISHLIST:
      reducedState = {
        email: '',
        items: [],
        products: [],
        isLoaded: false,
      };
      break;

    case SAVE_ITEMS_WISHLIST:
      reducedState = {
        ...state,
        email: action.payload.email,
        products: action.payload.products,
      };
      break;

    default:
      reducedState = state;
  }
  localStorage.setItem('wishlist', JSON.stringify(reducedState));
  return reducedState;
}
