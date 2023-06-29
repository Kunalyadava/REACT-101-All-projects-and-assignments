import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getGroceries } from '../Redux/AppReducer/action'

export default function Dashboard() {

  const isAuth = useSelector((state) => state.isAuth)
  const groceryData = useSelector((state) => state.groceryData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(isAuth){
      dispatch(getGroceries())
    }
    else{
      navigate(`/`)
    }
  }, [isAuth])


  console.log(groceryData)
  return (
   <div>
     <h2 style = {{textAlign: "center"}} >Groceries Dashboard</h2>
      <div className = "grocery_data_cont" style = {{display: "flex", gap: "50px", margin: "50px", flexWrap: "wrap"}} >
        {
          groceryData && groceryData.map(item => {
            return(
              <div className = "grocery_item" style = {{width: "250px"}}  >
                <img src = {item.image} className = "image" alt = "img" width = "70%" />
                <div className = "name"> {item.name} </div>
                <div className = "price"> {item.price} </div>
                <div className = "createdAt"> {item.createdAt} </div>

              </div>
            )
          })
        }
    </div>
   </div>
   
  )
}
