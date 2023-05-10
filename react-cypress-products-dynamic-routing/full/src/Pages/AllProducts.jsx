import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"

export default function AllProducts() {
  const [data, setData] = useState([])

  let navigate = useNavigate()

    const handleRedirect = (params) => {
        console.log(params)
        navigate(`products/${params}`)
    }

  useEffect(() => {
    axios(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
      .then((res) => setData(res.data))
  }, [])

  console.log(data)
  return (
    <div>
      <div>All Products</div>
      <div data-testid = "products-wrapper">
        {
          data.map(item => {
            return(
             <div onClick = {() => handleRedirect(item.id) } >
                <div> {item.id} </div>
                <div>{item.name}</div>
                <div>{item.price}</div>
             </div>
            )
          })
        }
      </div>
    </div>
  )
}
