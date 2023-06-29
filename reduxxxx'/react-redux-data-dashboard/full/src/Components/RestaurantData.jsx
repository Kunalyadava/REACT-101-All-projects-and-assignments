import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantData } from '../Redux/AppReducer/action'

export default function Dashboard() {

  const restaurantData = useSelector((state) => state.restaurantData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRestaurantData())

  }, [])


  console.log(restaurantData)
  return (
   <div>
     <h2 style = {{textAlign: "center"}} >Restaurant Data</h2>
      <div className = "restaurant_data_cont" style = {{display: "flex", gap: "50px", margin: "50px", flexWrap: "wrap"}} >
        {
          restaurantData && restaurantData.map(item => {
            return(
              <div className = "restaurant_item" style = {{width: "250px"}}  >
                <img src = {item.image} className = "image" alt = "img" width = "70%" />
                <div className = "name"> {item.name} </div>
                <div className = "type"> {item.type} </div>
                <div className = "rating"> {item.rating} </div>
                <div className = "number_of_votes"> {item.number_of_votes} </div>
              </div>
            )
          })
        }
    </div>
   </div>
   
  )
}