import * as types from "./actionType";

const initialState = {
  userData: {},
  isLoading: false,
  isAuth: false,
  meetupsData: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_USER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: payload[0],
        isLoading: false,
        isAuth: true,
      };
    case types.GET_USER_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case types.GET_MEETUPS_DATA_SUCCESS:
      return {
        ...state,
        meetupsData: payload
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userData: payload
      };
    case types.SUBSCRIBE_EVENT_SUCCESS:
      return {
        ...state,
        userData: payload
      };
    default:
      return state;
  }
};

export { reducer };