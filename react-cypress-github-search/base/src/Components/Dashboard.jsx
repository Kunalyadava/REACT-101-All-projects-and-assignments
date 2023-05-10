import { useState } from 'react'

export default function Dashboard() {
  const [btnArray, setBtnArray] = useState([0,0,0,0,0])

  return (
    <div>
      <select data-testid = "per_page">
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
      />

      <div data-testid = "github_results" >
        {/* Dipslay the use results here */}
      </div>

      <div data-testid = "pagination_cont">
        {
          btnArray.map((item, index) => {
            return(
              <button> {index+1} </button>
            )
          })
        }
      </div>
   
    </div>
  )
}
