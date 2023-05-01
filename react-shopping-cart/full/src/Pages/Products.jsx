import axios from 'axios'
import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Context } from '../Context/ContextProvider'
import {useNavigate} from "react-router-dom"

export default function Products() {
  const [data, setData] = useState([])
  const { cart, setCart } = useContext(Context)
  let navigate = useNavigate()

  const calQty = (id) => {
    if(id){
      var arr = cart.filter(item => item.id == id)
      return arr.length
    }
    return 0
  }

  useEffect(() => {

    axios(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
    .then((res) => setData(res.data))
  }, [])

  
  return (
    <div>
      <button data-testid="navigate_to_cart_btn" onClick = {() =>  navigate(`/cart`)} > Take me to shopping bag! </button>
      <div data-testid="products-wrapper">
        {
          data.map(item => {
            return(
              <div style = {{display: "block"}} >
                <div data-testid = "product_title" onClick = {() =>  navigate(`${item.id}`) }> {item.title} </div>
                <div data-testid = "product_price"> {item.price} </div>
                <div data-testid = "product_qty" > Quantity: {calQty(item.id)} </div>
                <button data-testid = "add_btn"  onClick = {() => setCart([...cart, {id: item.id, title: item.title, price: item.price}])} >ADD</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}