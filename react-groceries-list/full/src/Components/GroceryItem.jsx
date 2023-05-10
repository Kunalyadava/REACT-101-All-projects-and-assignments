import CartButton from "./CartButton";
import { useState } from "react";
// reusable card component
const GroceryItem = (props) => {
  console.log(props)
  let [count,setCount]=useState (0)
  let {title,mrp,sellingPrice,imgURL,discount}=props
  const handleCount = (payload)=>{
    setCount(prev=>prev+payload)
  }
  return <div className="grocery_card">
    <p>{discount}</p>
    <img src ={imgURL} alt ={title}/>
    <h3>{title}</h3>
    <h5>{mrp}</h5>
    <p>{sellingPrice}</p>
    {count? <CartButton handleCount = {handleCount} count ={count}/>: <button data-cy ="add_to_cart" onClick={()=>setCount(count=>count+1)}>Add to Cart</button>
    }
   

  </div>;
};
export default GroceryItem;
