const DiceA=({dice,rollDice,show,count1,count2})=>{
    return(
        <div>
            <h2 data-testid="dice-A-value">Dice A: {dice}</h2>
            <button data-testid="dice-A-button" onClick={rollDice} disabled={count1===5&&count2===5?true:show?true:false}>Player 1: Roll Dice</button>
        </div>
    )
}

export default DiceA;
