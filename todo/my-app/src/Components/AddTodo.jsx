import {useState} from "react";

function AddTodo({handleAdd}){
    const [text,setText]=useState("");

    const handleChange=(e)=>{
        setText(e.target.value);

    }
    const handleClick=()=>{
        handleAdd(text)
        setText("")
    }
    return(
        <div>
        <input
          placeholder="Add A new todo"
          value={text}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>ADD</button>
      </div>
    )
}
export default AddTodo