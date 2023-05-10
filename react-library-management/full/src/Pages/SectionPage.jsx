import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"

export default function SectionPage() {
  const [data, setData] = useState([])
  const { section } = useParams()
  let navigate = useNavigate()

  const showBookDetails= (id) => {
    navigate(`/bookdetailspage/${id}`)
  }

  useEffect(() => {
    axios(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`).then(res => {
      var data = res.data.filter(item => item.section === section )
      setData(data)
    })
  }, [section])

  console.log(section)
  return (
    <div>
      <Navbar />

      <div className="sectionContainer">
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
