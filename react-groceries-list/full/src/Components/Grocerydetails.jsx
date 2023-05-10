import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"


const GroceryDetails = ()=>{

    return(<>
        <h1>Groceries</h1>
        <div data-cy="container">
            {data.map((item)=>{
             return <GroceryItem {...item}/>
            })}
        </div>
        </>
    )
}
export default GroceryDetails