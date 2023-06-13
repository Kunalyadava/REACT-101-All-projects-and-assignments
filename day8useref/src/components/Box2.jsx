import React from 'react'
import { useState } from 'react'

const Box2 = () => {
 let [count,setCount]=useState(1)
let handleClick=()=>{
  setCount(count+1)
 

}
console.log("count",Date.now())

  return (

    <div>
        <h1>count:{count}</h1>
        {/* <button onClick={()=>count.current=count.current+1}>click here</button> */}
        <button onClick={handleClick}>click here</button>



    </div>
  )
}
export default Box2
//useRef and useState both are used to store some value
//when you want your component to "remember"
//about something but dont want to re render
//when it changes , we can use the hook useRef
//it  returns object with keys and value {current:0}
//to store some interval ids setInterval etc


//useState will reRender its component
//it is for values which keeps changing
//it will affect the ui part


//https://codesandbox.io/s/serverless-tdd-9r8fj7
//https://codesandbox.io/s/day8usestate-phase2-hmyyr4
//https://codesandbox.io/s/day8-last-rgsv74