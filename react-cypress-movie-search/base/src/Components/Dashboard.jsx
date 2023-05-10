import React from 'react'

export default function Dashboard() {
  
  return (
    <div>
       <input
          style = {{padding:"5px", margin: "10px", width: 200}}
          type = "text"
          data-testid = "search_key"
          placeholder = "Search Movie Username"
      />
      <div data-testid = "movie_results" >
        {/* Add movie results based of search key here */}
      </div>
      
    </div>
  )
}