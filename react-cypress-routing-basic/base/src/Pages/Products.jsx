import React from 'react'

export default function Products() {

  return (
    <div>
      <h1 >All Products</h1 >
      <div className= "products-wrapper">
         <div>
            {/* Map the below div agaisnt your product data */}
            <div className = "id" > </div>
            <h3 className = "title" > </h3>
            <div className = "category" > </div>
            <div className = "price" > </div>
        </div>
      </div>
    </div>
  )
}