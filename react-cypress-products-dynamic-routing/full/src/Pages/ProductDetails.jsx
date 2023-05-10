import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

export default function ProductDetails() {
  const { id } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    axios(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`)
    .then(res => setData(res.data))
  }, [id])


  return (
    <div data-testid = "product-details" >
      {
        data && <div>
          <div data-testid = "product_id"> {data.id} </div>
          <div data-testid = "product_name">{data.name}</div>
          <div data-testid = "product_price">{data.price}</div>
        </div>
      }
    </div>
  )
}
