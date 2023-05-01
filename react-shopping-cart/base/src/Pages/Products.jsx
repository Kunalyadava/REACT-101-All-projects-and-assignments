import React from 'react'

export default function Products() {
  
  return (
    <div>
      <button data-testid="navigate_to_cart_btn"> Shopping Bag </button>
      <div data-testid="products-wrapper">
        {/* Map the below div on your products data */}
        <div>
          <div data-testid = "product_title" > </div>
          <div data-testid = "product_price"> </div>
          <div data-testid = "product_qty"> Quantity: </div>
          <button data-testid = "add_btn"> ADD</button>
        </div>
      </div>
    </div>
  )
}