import React from 'react'
import { useState } from 'react'


export default function Inventory() {
  const [inventory, setInventory] = useState({
    totalBooks: 13,
    totalPens: 10,
    totalNotebooks: 44,
    totalInkpens: 78
  })

  const addInventory = (param) => {
    if(param === "book"){
      setInventory({
        ...inventory,
        totalBooks: inventory.totalBooks + 1
      })
    }
    else if(param === "pen"){
      setInventory({
        ...inventory,
        totalPens: inventory.totalPens + 1
      })
    }
    else if(param === "notebook"){
      setInventory({
        ...inventory,
        totalNotebooks: inventory.totalNotebooks + 1
      })
    }
    else if(param === "inkPen"){
      setInventory({
        ...inventory,
        totalInkpens: inventory.totalInkpens + 1
      })
    }
  }

  const removeInventory = (param) => {
    if(param === "book" && inventory.totalBooks > 0){
      setInventory({
        ...inventory,
        totalBooks: inventory.totalBooks - 1
      })
    }
    else if(param === "pen" && inventory.totalPens > 0){
      setInventory({
        ...inventory,
        totalPens: inventory.totalPens - 1
      })
    }
    else if(param === "notebook" && inventory.totalNotebooks > 0){
      setInventory({
        ...inventory,
        totalNotebooks: inventory.totalNotebooks - 1
      })
    }
    else if(param === "inkPen" && inventory.totalInkpens > 0){
      setInventory({
        ...inventory,
        totalInkpens: inventory.totalInkpens - 1
      })
    }
  }

  return (
    <div style ={{display: "flex", gap: "100px"}} >
      <div>
        <h3 style ={{marginLeft: "48%"}} class = "totalBooks"> {inventory.totalBooks} </h3>
        <button onClick = {() => addInventory("book")} class = "addBook" >Add  Book</button>
        <button disabled = {inventory.totalBooks <= 0} onClick = {() => removeInventory("book")} class = "remBook" >Remove Book</button>
      </div>

      <div>
        <h3 style ={{marginLeft: "48%"}} class = "totalPens"> {inventory.totalPens} </h3>
        <button onClick = {() => addInventory("pen")} class = "addPen" >Add Pen</button>
        <button disabled = {inventory.totalPens <= 0} onClick = {() => removeInventory("pen")} class = "remPen" >Remove Pen</button>
      </div>

      <div>
        <h3 style ={{marginLeft: "48%"}} class = "totalNotebooks"> {inventory.totalNotebooks} </h3>
        <button onClick = {() => addInventory("notebook")} class = "addNotebook">Add Notebook</button>
        <button disabled = {inventory.totalNotebooks <= 0} onClick = {() => removeInventory("notebook")} class = "remNotebook" >Remove Notebook</button>
      </div>

      <div>
        <h3 style ={{marginLeft: "48%"}} class = "totalInkpens"> {inventory.totalInkpens} </h3>
        <button onClick = {() => addInventory("inkPen")} class = "addInkpen" >Add Inkpen</button>
        <button disabled = {inventory.totalInkpens <= 0} onClick = {() => removeInventory("inkPen")} class = "remInkpen" >Remove Inkpen</button>
      </div>
      <h2 class="total" > Total Item Count: {inventory.totalBooks + inventory.totalPens +  inventory.totalNotebooks + inventory.totalInkpens} </h2>
    </div>
  )
}
