import React, {useEffect, useState} from 'react'
import axios from "axios"

export default function Products() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
      .then((res) => setData(res.data.data))
  }, [])

  console.log(data)
  return (
    <div>
      <h1 >All Products</h1 >
      <div className= "products-wrapper" style = {{display: "flex", flexWrap: "wrap", gap: "30px"}} >
        {
          data.map(item => {
            return(
             <div style = {{padding: "20px", border: "1px solid grey", width: "300px"}} >
                <div>{item.id}</div>
                <h3>{item.title}</h3>
                <div>{item.category}</div>
                <div>{item.price}</div>
             </div>
            )
          })
        }
      </div>
    </div>
  )
}