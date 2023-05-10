const DiceB=({dice,rollDice,show,count1,count2})=>{
    return(
        <div>
            <h2 data-testid="dice-B-value">Dice B: {dice}</h2>
            <button data-testid="dice-B-button" onClick={rollDice} disabled={count1===5&&count2===5?true:show?false:true}>Player 2: Roll Dice</button>
        </div>
    )
}

export default DiceB;
