import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Dashboard() {
  const[ data, setData] = useState([])
  const [searchKey, setSearchKey]= useState("")
  const [totalCount, setTotalCount] = useState(0)
  const[ page, setPage] = useState(1)
  const[ perPage, setPerPage] = useState(10)
  const [btnArray, setBtnArray] = useState([0,0,0,0,0])

  const handleSearch = (input) => {
    setSearchKey(input)
    axios(`https://api.github.com/search/users?q=${input}&per_page=${perPage}&page=${page}`)
    .then(res => {
      setData(res.data.items)
    })
    .catch(err => alert(err))
  }

  useEffect(() => {
   if(searchKey){
    axios(`https://api.github.com/search/users?q=${searchKey}&per_page=${perPage}&page=${page}`)
    .then(res => {
      setData(res.data.items)
    })
    .catch(err => alert(err))
   }

  }, [page, perPage])

  console.log(data)
  return (
    <div>
        <select data-testid = "per_page" onChange = {(e) => setPerPage(e.target.value)} >
          <option value = "10"> Per Page </option>
          <option value = "10" >10</option>
          <option value = "20" >20</option>
          <option value = "30" >30</option>
        </select>
       <input
          style = {{padding:"5px", margin: "10px", width: 200}}
          type = "text"
          data-testid = "search_key"
          placeholder = "Search Github Username"
          onChange = {(e) => handleSearch(e.target.value)}
      />
      <div data-testid = "github_results" >
        {
          data.map(item => {
            return(
              <div >
                <img src= {item.avatar_url} alt = "img" /> 
                <div>Login:  {item.login}</div> 
                <div>Type:  {item.type}</div>
              </div>
            )
          })
        }
      </div>

      <div data-testid = "pagination_cont">
        {
          btnArray.map((item, index) => {
            return(
              <button onClick = {() => setPage(index+1)} > {index+1} </button>
            )
          })
        }
      </div>
   
      
    </div>
  )
}
