import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  msg: '',
  status: null,
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      console.log(action.payload.msg);
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };

    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
}
