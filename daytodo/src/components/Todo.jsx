import { useState } from "react";
function Todo(){
    const [text,setText]=useState("")
    const [todos,setTodos]=useState([])
    const handleChange=(event)=>{setText(event.target.value)};
 const handleAdd=()=>{
    const newItem={
        id:Date.now()+Math.random()+text,
        title:text,
        status:false,
    }
   
const todoListafterItemAdition=[...todos,newItem ]

setTodos(todoListafterItemAdition);
setText("")
 }
 console.log(todos)
return(
<div>
<div>
<input 
placeholder="Add a new todo"
value={text}
onChange={handleChange}
/>
<button onClick={handleAdd}>Add</button>
</div>
<div>{todos.map((item)=>(
<div key={item.id}>
    {item.title}-{item.status ? 
    "completed": "not completed"}
    </div>
    ))}
</div>
</div>
)
}
export default Todo;
