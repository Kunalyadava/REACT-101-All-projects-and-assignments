import * as types from "./actionType";

const initialState = {
  coffeeData: [],
  restaurantData: [],
  employeeData : []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_COFFEE_DATA_SUCCESS:
      return {
        ...state,
        coffeeData: [...payload],
      };
    case types.GET_RESTAURANT_DATA_SUCCESS:
        return {
            ...state,
            restaurantData: [...payload],
        };
    case types.GET_EMPLOYEE_DATA_SUCCESS:
        return {
            ...state,
            employeeData: [...payload],
        };

    default:
      return state;
  }
};

export { reducer };