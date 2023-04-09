import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";
import data1 from './fiction.json';
import data2 from './nonfiction.json';
import BookCard from "./components/BookCard";

function App() {
  const[tog,setTog]=useState(false)

  const handletog=()=>{
    setTog(true);
  }
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={handletog}>

        {tog?"Show Fictional Books": "Show Non-Fiction Books"}
      </button>
      

     
     <div data-testid="conditional-container">
     {!tog?(
        <Fiction books={data1} BookCard={BookCard}/>
      ):
     ( <NonFiction books={data2} BookCard={BookCard}/>)
      }
       </div>

      
    </div>
  );
}

export default App;
