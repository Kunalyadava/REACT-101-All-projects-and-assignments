import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoffee } from '../Redux/AppReducer/action'

export default function CoffeeData() {

  const coffeeData = useSelector((state) => state.coffeeData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCoffee())

  }, [])


  console.log(coffeeData)
  return (
   <div>
     <h2 style = {{textAlign: "center"}} >Coffee Data</h2>
      <div className = "country_data_cont" style = {{display: "flex", gap: "50px", margin: "50px", flexWrap: "wrap"}} >
        {
          coffeeData && coffeeData.map(item => {
            return(
              <div className = "grocery_item" style = {{width: "250px"}}  >
                <img src = {item.image} className = "image" alt = "img" width = "70%" />
                <div className = "title"> {item.title} </div>
                <div className = "price"> {item.price} </div>

              </div>
            )
          })
        }
    </div>
   </div>
   
  )
}