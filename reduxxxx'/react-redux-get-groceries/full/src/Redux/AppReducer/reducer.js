import * as types from "./actionType";

const initialState = {
  groceryData: [],
  isAuth: false,
  isLoading: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_GROCERY_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_GROCERY_DATA_SUCCESS:
      return {
        ...state,
        groceryData: [...payload],
      };
    case types.GET_GROCERY_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case types.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        isAuth: true,
    };
    default:
      return state;
  }
};

export { reducer };