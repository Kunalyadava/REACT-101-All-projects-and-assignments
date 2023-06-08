import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem"

function Todo(){
//   const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

//   const handleChange =(e) => {
//     setText(e.target.value);
//     // setText("batman")//hardcoded

//     console.log(e.target.value)
//   };
  const handleAdd = (text) => {
    //what should happen if handleAdd is clicked
    //A new item  will be added to todo list
    const newItem = {
      id: Date.now() + Math.random() + text,
      title: text,
      status: false,
    };
    const todoAfterItemAddition = [...todos, newItem];
    setTodos(todoAfterItemAddition);
    // setText("");
  };
  console.log(todos);
  return (
    <div>


      {/* <div>
        <input
          placeholder="Add A new todo"
          value={text}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>ADD</button>
      </div> */}
      <AddTodo handleAdd={handleAdd}/>


      <div>

        {todos.map((todo) => {
          <TodoItem 
          key={todo.id}
          title=  {todo.title}
          status={todo.status }
          id={todo.id}/>
        })}
      </div>
    
    </div>
  );
};
export default Todo;
