import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeetupsData } from '../Redux/AppReducer/action';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetupsData = useSelector((state) => state.AppReducer.meetupsData);
  let navigate = useNavigate()
  
  const redirect = (params) => {
    navigate(`/${params}`)
  }

  useEffect(() => {
    dispatch(getMeetupsData())
  }, [])

  return (
    <div style = {{margin: "50px"}} >
        <div style = {{display: "flex", justifyContent: "space-between"}} >
          <button className = "my-events" onClick = {() => redirect("home")} > Show My Events </button>
          <div style = {{display: "flex", gap: 40}} >
            <button  onClick = {() => redirect("login") }>Login</button>
            <button className = "register" onClick = {() => redirect("register")} >Register</button>
          </div>
        </div>
       <h2 style = {{textAlign: "center"}} >Upcoming Events</h2>
        <div className = "meetups_wrapper"  style = {{display: "flex", gap: "50px", margin: "50px", flexWrap: "wrap"}} >
          {
            meetupsData && meetupsData.map(item => {
              return(
                <div style = {{textAlign: "center", border: "1px solid grey", padding: "20px", borderRadius: "5px"}} >
                  <img src= {item.image} alt="img" className="image" width = "350px" />
                  <h4 className="title"> {item.title} </h4>
                  <div className="location"> {item.location} </div>
                  <div className="date"> {item.date} </div>
                  <div className="time"> {item.time} </div>
                  <div className="theme"> {item.theme} </div>
                  <div className="description"> {item.description} </div>
                </div>
              )
            })
          }
        </div>
    </div>
   
  )
}