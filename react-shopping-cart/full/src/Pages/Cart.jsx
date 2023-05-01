import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../Context/ContextProvider'

export default function Cart() {
  const { cart, setCart } = useContext(Context)

  const calQty = (id) => {
    if(id){
      var arr = cart.filter(item => item.id == id)
      return arr.length
    }
    return 0
  }

  const calTotal = () => {
    var total = 0
    cart.map(item => total+= item.price)
    return total
  }

  return (
    <div>
      <h2>Cart</h2>
      <div data-testid="products-cart">
        {
          cart.map(item => {
            return(
              <div>
                <div> {item.title} </div>
                <div> {item.price} </div>
                <div> Quantity: {calQty(item.id)} </div>
              </div>
            )
          })
        }
      </div>
      <div data-testid="cart-total" > Total Price: {calTotal()} </div>
    </div>
  )
}