import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [turn, setTurn] = useState(true);
  const [hasWinner, setWinner] = useState(false)

  function handleCount(val){
    setCount(count+val)
  }

  function handleTurn(){
    setTurn(!turn)
  }

  function resetGame(){
    setCount(0);
    setTurn(true);
    setWinner(false);
  }

  function incrementButton(val){
    const newCount = count + val;
    if(newCount === 10){
      setWinner(true)
      handleCount(val)
      return;
    }

    handleCount(val)
    handleTurn()
  }

  return (
    <div className="App">
      <h1>Welcome to Reach Ten Mini-Game</h1>

      <h2>Its Your Turn: <span data-testid="turn-container">{turn? "Player 1": "Player 2"}</span> </h2>
      <div data-testid="buttons-container">
        <button data-testid="add-one-btn" onClick={()=>incrementButton(1)} disabled={hasWinner}>+1</button>
        <button data-testid="add-two-btn" onClick={()=>incrementButton(2)} disabled={count >= 9 ? true:false}>+2</button>
      </div>

      <h1 data-testid="counter">{count}</h1>

      <h2 >Winner: <span data-testid="winner-container">{(hasWinner === false? 'Still To Be Decided': turn? "Player 1": "Player 2")}</span> </h2>

      <button data-testid="reset-btn" onClick={()=>resetGame()}>Reset Game</button>
    </div>
  );
}

export default App;