import React from 'react'
import { useRef } from 'react'

const Box = () => {
 let count=useRef(0)
let handleClick=()=>{
  count.current=count.current+1
    console.log(count)

}


  return (

    <div>
        <h1>count:{count.current}</h1>
        {/* <button onClick={()=>count.current=count.current+1}>click here</button> */}
        <button onClick={handleClick}>click here</button>



    </div>
  )
}
export default Box
//useRef and useState both are used to store some value
//when you want your component to "remember"
//about something but dont want to re render
//when it changes , we can use the hook useRef