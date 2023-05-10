import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Dashboard() {
  const[ data, setData] = useState([])
  const [searchKey, setSearchKey]= useState("")
  const [id, setId] = useState("")

  const handleSearch = (input) => {
    setSearchKey(input)
    clearTimeout(id);
    var timer = setTimeout(() => {
      axios(` http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies?q=${input}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => alert(err))

    }, 1000)
    setId(timer)
  }

  console.log(data)
  return (
    <div>
       <input
          style = {{padding:"5px", margin: "10px", width: 200}}
          type = "text"
          data-testid = "search_key"
          placeholder = "Search Movie Username"
          onChange = {(e) => handleSearch(e.target.value)}
      />
      <div data-testid = "movie_results" >
        {
          data.map(item => {
            return(
              <div style = {{padding: 20, border: "1px solid grey", margin: 20,  marginLeft: 800, width: 300}} >
                <div>Title:  {item.title}</div> 
                <div>Year:  {item.year}</div>
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}