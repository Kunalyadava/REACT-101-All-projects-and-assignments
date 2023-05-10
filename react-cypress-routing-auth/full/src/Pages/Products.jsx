import React, {useEffect, useState} from 'react'
import axios from "axios"

export default function AllProducts() {
  const [data, setData] = useState([])


  useEffect(() => {
    axios(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
      .then((res) => setData(res.data.data))
  }, [])

  console.log(data)
  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper" style = {{display: "flex", flexWrap: "wrap", gap:"40px", justifyContent: "center"}} >
        {
          data.map(item => {
            return(
             <div style = {{width: "250px", border: "1px solid grey", padding: "20px", boxShadow: "0px 15px 10px -15px #111", borderRadius: 5  }} >
                <h3>{item.title}</h3>
                <div>{item.brand}</div>
                <div>{item.price}</div>
             </div>
            )
          })
        }
      </div>
    </div>
  )
}