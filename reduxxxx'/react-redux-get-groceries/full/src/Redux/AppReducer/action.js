import axios from "axios";
import * as types from "./actionType";

const getGroceries = () => (dispatch) => {
  dispatch({ type: types.GET_GROCERY_DATA_REQUEST });

  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`
    )
    .then((res) => {
        dispatch({ type: types.GET_GROCERY_DATA_SUCCESS, payload: res.data.data })             
    }
    )
    .catch((e) => {
        dispatch({ type: types.GET_GROCERY_DATA_FAILED, payload: e })
    }
      
    );
};

const authenticateUser = (email, password) => (dispatch) => {
    dispatch({ type: types.GET_USER_DATA_REQUEST });

  return axios
    .post(
      `https://reqres.in/api/login`, {
        email,
        password
      }
    )
    .then((res) => {
        dispatch({ type: types.GET_USER_DATA_SUCCESS, payload: res.token })             
    }
    )
    .catch((e) => {
        dispatch({ type: types.GET_USER_DATA_FAILURE, payload: e })
    }
      
    );
}


export { getGroceries, authenticateUser };