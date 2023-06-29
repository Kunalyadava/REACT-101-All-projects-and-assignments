import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { getMeetupsData, subscribeEvent } from '../Redux/AppReducer/action';

export default function Home() {
    const dispatch = useDispatch();
    const [eventsData, setEventsData] = useState([])
    const [data, setData] = useState([]) 
    const isAuth = useSelector((state) => state.AppReducer.isAuth);
    const meetupsData = useSelector((state) => state.AppReducer.meetupsData);
    const userData = useSelector((state) => state.AppReducer.userData);
    let navigate = useNavigate()

    const subscribe = (id) => {
      var newSubscribed = [...userData.subscribed, id]
      dispatch(subscribeEvent(userData.id, newSubscribed))
    }
  

    useEffect(() => {
      if(userData.id && meetupsData){
        var data = meetupsData.filter(item => {
          return userData.subscribed.indexOf(item.id) !== -1 ? true : false
        })
        setData([...data])

        var newData = meetupsData.filter(item => userData.interests.indexOf[item.theme] !== -1 && userData.subscribed.indexOf(item.id) === -1 )
        setEventsData(newData)
      }
     
    }, [meetupsData, userData])

    useEffect(() => {
      dispatch(getMeetupsData())
    }, [])


    console.log(data)
    return (
      <div>
        {
          isAuth? 
          <div>
            <h2 style = {{textAlign: "center"}} >Subscribed Events</h2>
            <div className = "subscribed-events" style = {{display: "flex", gap: "50px", margin: "50px", flexWrap: "wrap"}} >
              {
                data && data.map(item => {
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

            <h2 style = {{textAlign: "center"}}>Recommended Events</h2>
            <div className = "recommended-events" style = {{display: "flex", gap: "50px", margin: "50px", flexWrap: "wrap"}} >
              {
                eventsData && eventsData.map(item => {
                  return(
                    <div style = {{textAlign: "center", border: "1px solid grey", padding: "20px", borderRadius: "5px"}} >
                      <img src= {item.image} alt="img" className="image" width = "350px" />
                      <h4 className="title"> {item.title} </h4>
                      <div className="location"> {item.location} </div>
                      <div className="date"> {item.date} </div>
                      <div className="time"> {item.time} </div>
                      <div className="theme"> {item.theme} </div>
                      <div className="description"> {item.description} </div>
                      <button className = "subscribe" onClick = {() => subscribe(item.id)} >Subscribe!</button>
                    </div>
                  )
                })
              }
            </div>
          </div>
        :
        <Navigate to = "/" replace = {true} />
        }

        
      </div>
     
    )
}
