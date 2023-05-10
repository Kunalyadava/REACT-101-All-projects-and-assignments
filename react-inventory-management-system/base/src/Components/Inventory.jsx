import React from 'react'

export default function Inventory() {

  return (
    <div style ={{display: "flex", gap: "100px"}} >
      <div>
        <h3 style ={{marginLeft: "48%"}} class = "totalBooks"> </h3>
        <button class = "addBook" >Add  Book</button>
        <button class = "remBook" >Remove Book</button>
      </div>

      <div>
        <h3 style ={{marginLeft: "48%"}} class = "totalPens"> </h3>
        <button class = "addPen" >Add Pen</button>
        <button class = "remPen" >Remove Pen</button>
      </div>

      <div>
        <h3 style ={{marginLeft: "48%"}} class = "totalNotebooks"> </h3>
        <button class = "addNotebook">Add Notebook</button>
        <button class = "remNotebook" >Remove Notebook</button>
      </div>

      <div>
        <h3 style ={{marginLeft: "48%"}} class = "totalInkpens"> </h3>
        <button class = "addInkpen" >Add Inkpen</button>
        <button class = "remInkpen" >Remove Inkpen</button>
      </div>
      <h2 class="total" > Total Item Count: </h2>
    </div>
  )
}
