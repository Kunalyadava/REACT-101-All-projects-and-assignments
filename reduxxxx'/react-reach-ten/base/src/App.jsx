function App() {
 
  return (
    <div className="App">

      {/* Display Player Turn here */}
      <span data-testid="turn-container"></span>


      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button data-testid="add-one-btn" ></button>
        <button data-testid="add-two-btn" ></button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter"></h1>

      {/* Display the winner here */}
      <span data-testid="winner-container"></span>

      {/* Reset the Game with this button */}
      <button data-testid="reset-btn"></button>
    </div>
  );
}

export default App;
