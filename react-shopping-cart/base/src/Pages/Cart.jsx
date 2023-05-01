import React from 'react'

export default function Cart() {

  return (
    <div>
      <h2>Cart</h2>Cart
      <div data-testid="products-cart">
        {/* Map the below div on your cart data */}
        <div>
          <div data-testid = "product_title" > </div>
          <div data-testid = "product_price"> </div>
          <div data-testid = "product_qty"> Quantity: </div>
          <button data-testid = "add_btn"> ADD</button>
        </div>
      </div>
      <div data-testid="cart-total" > Total Price: </div>
    </div>
  )
}
