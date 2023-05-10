import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import Navbar from './Navbar'

export default function Home() {
  const [data, setData] = useState([])
  let navigate = useNavigate()

  const showBookDetails = (id) => {
    navigate(`/bookdetailspage/${id}`)
  }

  useEffect(() => {
    axios(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`).then(res => setData(res.data))
  }, [])

  return (
    <div>
      <Navbar />
      <div className="mainContainer">
      {
        data && data.map((item, index) => {
          return(
            <div key = {index}  className="bookCard" onClick = {() => showBookDetails(item.id)} style = {{margin: 20, border: "1px solid grey", padding: "10px"}} >
              <h5 className = "title" > {item.title} </h5>
              <div className = "price" > {item.price} </div>
              <div className = "author" > {item.author} </div>
            </div>
          )
        })
      }
      </div>
      
    </div>
  )
}
