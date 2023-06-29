import axios from "axios";
import * as types from "./actionType";

const getUsers = (name, password) => (dispatch) => {
  dispatch({ type: types.GET_USER_DATA_REQUEST });

  return axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`
    )
    .then((res) => {
        var user = res.data.filter(item => item.name === name)
        console.log(user)
        if(!user){
            throw new Error("User does not exist")
        }
        else{
            if(user[0].password !== password ){
                throw new Error("Incorrect Password")
            }
            else{
                dispatch({ type: types.GET_USER_DATA_SUCCESS, payload: user })                
            }
        }
    }
    )
    .catch((e) => {
        console.log(e)
        dispatch({ type: types.GET_USER_DATA_FAILURE, payload: e })
    }
      
    );
};

const getMeetupsData = (name, password) => (dispatch) => {
    dispatch({ type: types.GET_MEETUPS_DATA_REQUEST });
  
    return axios
      .get(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/meetups`
      )
      .then((res) => {
        dispatch({ type: types.GET_MEETUPS_DATA_SUCCESS, payload: res.data })       
        console.log(res.data) 
      }

      )
      .catch((e) => {
          console.log(e)
          dispatch({ type: types.GET_MEETUPS_DATA_FAILURE, payload: e })
      }
        
      );
  };

  const registerUser = (name, location, interests, password) => (dispatch) => {
    dispatch({ type: types.REGISTER_USER_REQUEST });
  
    return axios
      .post(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`, 
        {
          name,
          location, 
          interests: interests.split(", "),
          password,
          subscribed: []
        }
      )
      .then((res) => {
        dispatch({ type: types.REGISTER_USER_SUCCESS, payload: res.data })       
        console.log(res.data) 
      }

      )
      .catch((e) => {
          console.log(e)
          dispatch({ type: types.REGISTER_USER_FAILURE, payload: e })
      }
        
      );
  };


  const subscribeEvent = (id, subscribedEvents) => (dispatch) => {
    dispatch({ type: types.SUBSCRIBE_EVENT_REQUEST });

    console.log(id)
  
    return axios
      .patch(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users/${id}`, 
        {
         subscribed: subscribedEvents
        }
      )
      .then((res) => {
        dispatch({ type: types.SUBSCRIBE_EVENT_SUCCESS, payload: res.data })       
        console.log(res.data) 
      }

      )
      .catch((e) => {
          console.log(e)
          dispatch({ type: types.SUBSCRIBE_EVENT_FAILURE, payload: e })
      }
        
      );
  };

export { getUsers, getMeetupsData, registerUser, subscribeEvent };