import {useState} from "react"

function App() {
  const [counter, setCounter] = useState(0)
  function changeVal(val){
    let newVal = val + counter;
    setCounter(newVal)
  }

  function checkPrime(value) {
    if(value <= 1) return "false";

    for(let i = 2; i <= value**0.5; i++) {
      if(value % i === 0) return "false";
    }
    return "true";
  }


  return (
    <div className="App">
      <h1>Welcome to Counter 2.0</h1>
      <div>
        <button data-testid="minusonebtn" onClick={()=>changeVal(-1)} disabled = {counter === 0 ? true : false}>-1</button>
        <button data-testid="plusonebtn" onClick={()=>changeVal(1)}>+1</button>
      <div>
        <button data-testid="resetbtn" onClick={()=>setCounter(0)}>Reset Count</button>
      </div>

      </div>

      <h1>Count: <span data-testid="counter">{counter}</span></h1>


      <div>
        <h2>This Number is: <span data-testid="odd-or-even">{counter % 2 === 0 ? "Even": "Odd"}</span> </h2>
        <h2>Prime Number: <span data-testid="is-prime">{checkPrime(counter)}</span></h2>
      </div>
        
    </div>
  );



}

export default App;