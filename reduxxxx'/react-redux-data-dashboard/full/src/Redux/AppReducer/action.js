import axios from "axios";
import * as types from "./actionType";

const getCoffee = () => (dispatch) => {
  dispatch({ type: types.GET_COFFEE_DATA_REQUEST});

  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`
    )
    .then((res) => {
        dispatch({ type: types.GET_COFFEE_DATA_SUCCESS, payload: res.data.data })             
    }
    )
    .catch((e) => {
        dispatch({ type: types.GET_COFFEE_DATA_FAILED, payload: e })
    }
      
    );
};

const getRestaurantData = () => (dispatch) => {
    dispatch({ type: types.GET_RESTAURANT_DATA_REQUEST });
  
    return axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`
      )
      .then((res) => {
          dispatch({ type: types.GET_RESTAURANT_DATA_SUCCESS, payload: res.data.data })             
      }
      )
      .catch((e) => {
          dispatch({ type: types.GET_RESTAURANT_DATA_FAILED, payload: e })
      }
        
      );
  };

const getEmployeeData = () => (dispatch) => {
    dispatch({ type: types.GET_EMPLOYEE_DATA_REQUEST });

    return axios
        .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`
        )
        .then((res) => {
            dispatch({ type: types.GET_EMPLOYEE_DATA_SUCCESS, payload: res.data.data })             
        }
        )
        .catch((e) => {
            dispatch({ type: types.GET_EMPLOYEE_DATA_FAILED, payload: e })
        }
        
        );
};


export { getCoffee, getRestaurantData, getEmployeeData };