import {useState} from "react"
import {useState} from "react"
 
function Counter(){
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };
    const handleDecrement = () => {
      setCount(count - 1);
    };
  
    const handleDouble = () => {
      setCount(count * 2);
    };
  
    return (
      <div>
        <h2 data-testid="counter-header">Counter</h2>
        <button data-testid="add-btn" onClick={handleIncrement}>+</button>
        <button data-testid="subtract-btn" onClick={handleDecrement}>-</button>
        <button data-testid="double-btn" onClick={handleDouble}>Double</button>
        <h3 data-testid="count">{count}</h3>
      </div>
    );
}
export default Counter;
